import React, {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate, Link} from "react-router-dom";
import LOGGED_IN from '../login-registration/signin.js';

const api = axios.create({
    withCredentials: true
});

const UserTile = ({user}) => {
    const [currentUser, setCurrentUser] = useState({})
    const navigate = useNavigate()
    let button = 'Follow';
 //   let loggedIn = false;

    const fetchCurrentUser = async () => {
        try {
            const response = await api.post("http://localhost:4000/api/profile")
            setCurrentUser(response.data)
        } catch (e) {
            console.log(e)
        }
    }

    const followUser = async (userToFollow) => {
        console.log(`IS LOGGED IN? ${LOGGED_IN}`)
        if (!LOGGED_IN) {
            navigate('/signin')
        }
        else {
            try {
                await api.put(`http://localhost:4000/api/users/${currentUser._id}`, {
                        ...currentUser,
                        following: [...currentUser.following, userToFollow.username]
                    }
                )
                await api.put(`http://localhost:4000/api/users/${userToFollow._id}`, {
                        ...userToFollow,
                        followers: [...userToFollow.followers, currentUser.username]
                    }
                )
                button = 'Unfollow';
            } catch (e) {
                console.log(e)
            }
        }
    }

    const visitProfile = () => {
        navigate(`/profiles/profile/${user._id}`)
    }

    useEffect(() => {
        fetchCurrentUser()
    }, [])

    return (
        <li className={'list-group-item'}>
            {(currentUser._id !== user._id) &&
            <Link to={`/profile/${user._id}`}>
                {user.username}
            </Link>
            }
            {
                (currentUser._id === user._id) &&
            <Link to={`/profile`}>
                {user.username}
            </Link>
            }

            <button className={'btn btn-primary'}
            onClick={() =>
                followUser(user)
            }>
                {button}
            </button>
        </li>
    );
};
export default UserTile;