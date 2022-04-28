import React, {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const api = axios.create({
    withCredentials: true
});

const UserTile = ({user}) => {
    const [currentUser, setCurrentUser] = useState({})
    const navigate = useNavigate()

    const fetchCurrentUser = async () => {
        try {
            const response = await api.post("http://localhost:4000/api/profile")
            setCurrentUser(response.data)
        } catch (e) {
            navigate('/signin')
        }
    }

    const followUser = async (currentUser, userToFollow) => {
        try {
            await api.put(`http://localhost:4000/api/users/${currentUser._id}`, {
                ...currentUser,
                following: [...currentUser.following, userToFollow.username]
            }
            )
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchCurrentUser()
    }, [followUser])

    return (
        <li className={'list-group-item'}>
            {user.username}
            <button className={'btn btn-primary'}
            onClick={() => followUser(currentUser, user)}>
                Follow
            </button>
        </li>
    );
};
export default UserTile;