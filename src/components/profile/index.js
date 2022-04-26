import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";

const api = axios.create({
    withCredentials: true
});

const Profile = () => {
    const [currentUser, setCurrentUser] = useState({})
    const navigate = useNavigate()
    const fetchCurrentUser = async () => {
        try {
            const response = await api.post("http://localhost:4000/api/profile")
            setCurrentUser(response.data)
        } catch (e) {
            navigate('/')
        }
    }
    useEffect(() => {
        fetchCurrentUser()
    }, [])
/*
    const handleUpdateBtn = async () => {
        try {
            if (currentUser) {
                const response = await api.put(`http://localhost:4000/api/${currentUser._id}`)
            }
            setCurrentUser(response.data)
        } catch (e) {
            navigate('/')
        }
    }

 */
    return (
        <div>
            <h1>My Profile</h1>
            <div>
                <h4>Username: {currentUser.username}</h4>
                <h4>Password: {currentUser.password}</h4>

            </div>
            {JSON.stringify(currentUser)}
        </div>
    );
};

export default Profile;

/*
                <button
                    onClick={handleUpdateBtn}
                    className="btn btn-primary">
                    Update Information
                </button>
                */