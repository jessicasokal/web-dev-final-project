import React, {useEffect, useState} from 'react';
import axios from "axios";

const api = axios.create({
    withCredentials: false
});

const FollowingFollowersSidebar = (userID) => {
    console.log(`IN FOLLOWING: ${userID}`)
    const [user, setUser] = useState();

    useEffect(() => {
        fetchCurrentUser();
    }, []);

    const fetchCurrentUser = async () => {
        try {
            const response = await api.get(`http://localhost:4000/api/users/${userID}`)
            setUser(response.data)
        } catch (e) {
            alert(e)
        }
    };


    return (
        <>
            {
                user.username
            }
        </>
    );
}

export default FollowingFollowersSidebar;