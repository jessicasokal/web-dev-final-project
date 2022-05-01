import React, {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import axios from "axios";
import './profile.css';

const api = axios.create({
    withCredentials: false
});


const OtherProfile = () => {
    let location = useLocation().pathname;
    const textArray = location.split('/');
    const userId = textArray[2];

    const [user, setUser] = useState([]);

    useEffect(() => {
        fetchUser();
    }, []);

    const fetchUser = async () => {
        try {
            const response = await api.get(`http://localhost:4000/api/users/${userId}`)
            setUser(response.data)
        } catch (e) {
            console.log(e)
        }
    };

    const [currentUser, setCurrentUser] = useState({})

    useEffect(() => {
        fetchCurrentUser()
    }, [])

    const fetchCurrentUser = async () => {
        try {
            const response = await api.post("http://localhost:4000/api/profile")
            setCurrentUser(response.data)
        } catch (e) {
            console.log(e)
        }
    }


    return(
        <div className={'row'}>
            <div className={'col-5 mt-4 wd-background-grey'}>
                <div className={'p-2 m-2'}>
                    <h4>Liked Movies</h4>
                </div>
            </div>

            <div className={'col-7'}>
                <div className={'p-2 m-2'}>
                        <div className={'col-8'}>
                            <h2>User Profile</h2>
                        </div>

                    <div className={'col-10'}>
                        <div className={'row'}>
                                <span className={'wd_username'}>@{user.username}
                                    </span>
                        </div>

                        <div className={'wd_bold mt-2'}>
                            Contact: {user.email}
                        </div>

                    </div>

                    <div className={'pt-4'}>
                        <h3>Following</h3>


                        <h3>Followers</h3>
                        {user.followers}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default OtherProfile;

// {JSON.stringify(user)}
