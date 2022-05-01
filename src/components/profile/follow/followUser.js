
import axios from "axios";
import React from 'react';

const api = axios.create({
    withCredentials: true
});

export const followUser = async (currentUser, userToFollow) => {
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

        } catch (e) {
            console.log(e)
        }
}
