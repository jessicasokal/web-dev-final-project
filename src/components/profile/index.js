import React, {useEffect, useRef, useState} from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";
import './profile.css';

const api = axios.create({
    withCredentials: true
});

const Profile = () => {
    const [currentUser, setCurrentUser] = useState({})
    const navigate = useNavigate()
    const emailRef = useRef();
    const fetchCurrentUser = async () => {
        try {
            const response = await api.post("http://localhost:4000/api/profile")
            setCurrentUser(response.data)
        } catch (e) {
            navigate('/')
        }
    }
    const editEmail = async (_id, user) => {
        try {
            await api.put(`http://localhost:4000/api/users/${_id}`, user)
        } catch (e) {
            console.log(e)
        }
        navigate('/signin')
    }
    useEffect(() => {
        fetchCurrentUser()
    }, [])

    return (
        <div>
            <h1>My Profile</h1>
            <div className={'row'}>
                <div className={'col-10'}>
                    <div className={'row'}>
                    <span className={'wd_username'}>@{currentUser.username}
                        <button className={'btn btn-primary rounded-pill wd_small ms-4'}>Follow</button>
                    </span>
                    </div>

                    <div className={'row mt-3'}>
                        <div>
                            <span className={'wd_bold'}>
                            Email:
                            </span>
                            {currentUser.email}

                        <input
                                ref={emailRef}
                                placeholder="email"
                                type="email"
                                className={'ms-3'}
                        />
                        <button
                            className={'btn btn-primary rounded-pill wd_small ms-4'}
                            onClick={() => editEmail(currentUser._id, {
                                ...currentUser,
                                email: emailRef
                            })}>
                            Edit
                        </button>

                            <span className={'ps-5'}>
                                <span className={'wd_bold'}>Password:</span>
                                {currentUser.password}
                            </span>

                        <button className={'btn btn-primary rounded-pill wd_small ms-4'}>
                            Edit
                        </button>

                        </div>

                    </div>
                    <div className={'row'}>
                        <div className={'pt-5 wd_sidebar'}>Liked Movies</div>
                        {currentUser.likedMovies}
                    </div>
                </div>
                <div className={'col-2'}>
                    <div className={'wd_sidebar'}>Following</div>
                    {currentUser.followers}
                    <div className={'wd_sidebar'}>Followers</div>
                    {currentUser.following}
                </div>
                {JSON.stringify(currentUser)}
            </div>
        <br/>
            <br/>
            <br/>
            <br/>

        </div>
    );
};

export default Profile;

