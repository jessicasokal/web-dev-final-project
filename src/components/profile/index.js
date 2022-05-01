import React, {useEffect, useRef, useState} from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";
import './profile.css';
import isLoggedIn from "../../global/variables";
import FollowingFollowersSidebar from "./following_followers_sizebar";
import Signout from "../login-registration/signout";

const api = axios.create({
    withCredentials: true
});


const Profile = () => {
    const navigate = useNavigate()

    if (!isLoggedIn.LOGGED_IN) {
        navigate('/signin')
    }

    const [currentUser, setCurrentUser] = useState({})
    const following = currentUser.following;

    const emailRef = useRef();
    const passwordRef = useRef();

    useEffect(() => {
        fetchCurrentUser()
    }, [])

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


    return (
        isLoggedIn.LOGGED_IN &&
       <div className={'row'}>
           <div className={'col-5 mt-4 wd-background-grey'}>
               <div className={'p-2 m-2'}>
                   <h4>Liked Movies</h4>
               </div>
           </div>

           <div className={'col-7'}>
               <div className={'p-2 m-2'}>
                   <div className={'row mt-4'}>
                       <div className={'col-8'}>
                           <h2>My Profile</h2>
                       </div>
                       <div className={'col-4 mt-2'}>
                           <Signout/>
                       </div>
                   </div>

                       <div className={'col-10'}>
                           <div className={'row'}>
                                <span className={'wd_username'}>@{currentUser.username}
                                    </span>
                           </div>

                            <div className={'wd_bold mt-2'}>
                            Email: {currentUser.email}
                            </div>

                           <div>
                               <input
                                   ref={emailRef}
                                   placeholder="New email"
                                   type="email"
                               />
                               <button
                                   className={'btn btn-primary rounded-pill wd_small ms-4'}
                                   onClick={() => editEmail(currentUser)}>
                                   Edit
                               </button>
                           </div>

                           <div className={'wd_bold mt-2'}>
                               Password: {currentUser.password}
                           </div>

                           <div>
                               <input
                                   ref={passwordRef}
                                   placeholder="New password"
                                   type="text"
                               />

                               <button className={'btn btn-primary rounded-pill wd_small ms-4'}
                                       onClick={() => editPassword(currentUser)}>
                                   Edit
                               </button>
                           </div>
                       </div>

                   <div className={'pt-4'}>
                       <h3>Following</h3>


                       <h3>Followers</h3>
                       {currentUser.followers}
                   </div>
               </div>
        </div>

       </div>

    );
};

export default Profile;

/*
                <div className={'col-2'}>
                    {console.log(`CURRENT USER: ${currentUser._id}`)}
                    <FollowingFollowersSidebar userID={currentUser._id}/>
                </div>


                {JSON.stringify(currentUser)}
 */
