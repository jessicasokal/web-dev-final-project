import React, {useEffect, useRef, useState} from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";
import './profile.css';
import FollowingFollowersSidebar from "./following_followers_sizebar";
import isLoggedIn from "../../global/variables";


const api = axios.create({
    withCredentials: true
});


const Profile = () => {
    const navigate = useNavigate()

    if (!isLoggedIn.LOGGED_IN) {
        navigate('/signin')
    }

    const [currentUser, setCurrentUser] = useState({})

    const emailRef = useRef();
    const passwordRef = useRef();


    const fetchCurrentUser = async () => {
        try {
            const response = await api.post("http://localhost:4000/api/profile")
            setCurrentUser(response.data)
        } catch (e) {
            navigate('/signin')
        }
    }
    const editEmail = async (currentUser) => {
        try {
            await api.put(`http://localhost:4000/api/users/${currentUser._id}`, {
                ...currentUser,
                email: emailRef.current.value
            })
        } catch (e) {
            console.log(e)
        }
       navigate('/signin')
    }

    const editPassword = async (currentUser) => {
        try {
            await api.put(`http://localhost:4000/api/users/${currentUser._id}`, {
                ...currentUser,
                password: passwordRef.current.value
            })
        } catch (e) {
            console.log(e)
        }
        navigate('/signin')
    }

    useEffect(() => {
        fetchCurrentUser()
    }, [])

    return (
        isLoggedIn.LOGGED_IN &&
        <div>
            <h1 className={'mt-4'}>My Profile</h1>
            <div className={'row'}>
                <div className={'col-10'}>
                    <div className={'row'}>
                    <span className={'wd_username'}>@{currentUser.username}
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
                                placeholder="New email"
                                type="email"
                                className={'ms-3'}
                        />
                        <button
                            className={'btn btn-primary rounded-pill wd_small ms-4'}
                            onClick={() => editEmail(currentUser)}>
                            Edit
                        </button>
                        </div>
                        <div className={'ps-5 pt-3'}>
                                <span className={'wd_bold'}>Password: </span>
                                {currentUser.password}

                            <input
                                ref={passwordRef}
                                placeholder="New password"
                                type="text"
                                className={'ms-3'}
                            />

                        <button className={'btn btn-primary rounded-pill wd_small ms-4'}
                        onClick={() => editPassword(currentUser)}>
                            Edit
                        </button>

                        </div>

                    </div>
                    <div className={'row'}>
                        <div className={'pt-5 wd_sidebar'}>Liked Movies</div>
                        {currentUser.likedMovies}
                    </div>

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

/*
                <div className={'col-2'}>
                    {console.log(`CURRENT USER: ${currentUser._id}`)}
                    <FollowingFollowersSidebar userID={currentUser._id}/>
                </div>
 */
