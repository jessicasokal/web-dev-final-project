import React, {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate, Link} from "react-router-dom";
import isLoggedIn from "../../global/variables";

const api = axios.create({
    withCredentials: true
});

const UserTile = ({user}) => {
    const [currentUser, setCurrentUser] = useState({})
    const navigate = useNavigate()
    let button = 'Follow';

    const fetchCurrentUser = async () => {
        try {
            const response = await api.post("http://localhost:4000/api/profile")
            setCurrentUser(response.data)
        } catch (e) {
            console.log(e)
        }
    }

    const followUser = async (userToFollow) => {
        console.log(`IS LOGGED IN? ${isLoggedIn.LOGGED_IN}`)
        if (!isLoggedIn.LOGGED_IN) {
            navigate('/signin')
        }
        else {
            try {
                await api.put(`http://localhost:4000/api/users/${currentUser._id}`, {
                        ...currentUser,
                        following: [...currentUser.following, userToFollow._id]
                    }
                )
                await api.put(`http://localhost:4000/api/users/${userToFollow._id}`, {
                        ...userToFollow,
                        followers: [...userToFollow.followers, currentUser._id]
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
        <div className={'mb-2 mt-2 row'}>
            <div className={'col-8'}>
                {
                    (currentUser._id !== user._id) &&
                    <Link to={`/profile/${user._id}`}>
                        <li className={'list-group-item'}>
                            @{user.username}
                        </li>
                    </Link>
                }
                {
                    (currentUser._id === user._id) &&
                    <Link to={`/profile`}>
                        <li className={'list-group-item'}>
                            @{user.username}
                        </li>

                    </Link>
                }
            </div>
            <div className={'col-4'}>
                <button className={'btn btn-primary ms-5'}
                        onClick={() =>
                            followUser(user)
                        }>
                    {button}
                </button>
            </div>

        </div>

    );
};

export default UserTile;
/*
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


</li>
*/
