import React, {useEffect, useRef, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useProfile} from "../../contexts/profile-context";
import {
    findFollowers,
    findFollowing,
    findEmail,
    findPassword,
    editEmail,
    editPassword,
    findLiked
} from "../../services/user-service";
import './profile.css';
import UserTile from "../home/user-tile";
import Movie from "../home/movie";
import ProfileMovie from "./profile-movie";

const Profile = () => {
    const navigate = useNavigate()
    const {profile, signout} = useProfile()
    const [followers, setFollowers] = useState([])
    const [following, setFollowing] = useState([])
    const [likedMovies, setLikedMovies] = useState([])
    const emailRef = useRef()
    const [email, setEmail] = useState([])
    const passwordRef = useRef()
    const [password, setPassword] = useState([])

    // logs the current user out of their account
    const logout = async () => {
        try {
            await signout()
        } catch (e) {
            alert(e)
        }
        navigate('/login')
    }

    // finds the followers of the current user
    const findMyFollowers = async () => {
        const followers = await findFollowers(profile._id)
        setFollowers(followers)
    }

    useEffect(() => {
        findMyFollowers()
    }, [])

    // finds the following list for the current user
    const findMyFollowing = async () => {
        const following = await findFollowing(profile._id)
        setFollowing(following)
    }

    useEffect(() => {
        findMyFollowing()
    }, [])

    // finds the likedMovies of the current user
    const findMyLikedMovies = async () => {
        const likedMovies = await findLiked(profile._id)
        setLikedMovies(likedMovies)
    }

    useEffect(() => {
        findMyLikedMovies()
    }, [])

    // finds the email of the current user
    const findMyEmail = async () => {
        const email = await findEmail(profile._id)
        setEmail(email)
    }

    useEffect(() => {
        findMyEmail()
    }, [])

    // allows user to edit their email
    const editMyEmail = async () => {
        const email = await editEmail(profile, emailRef.current.value)
        setEmail(email)
    }

    // finds the password of the current user
    const findMyPassword = async () => {
        const password = await findPassword(profile._id)
        setPassword(password)
    }

    useEffect(() => {
        findMyPassword()
    }, [])

    // allows user to edit their password
    const editMyPassword = async () => {
        const password = await editPassword(profile, passwordRef.current.value)
        setPassword(password)
    }


    return (<>
            {
                profile &&
            <div className={'row mt-4'}>
                <div className={'col-5 mt-4 wd-background-grey'}>
                    <div className={'p-2 m-2'}>
                        <h4>Liked Movies</h4>
                        {likedMovies.reverse().map((movie) =>
                            <ProfileMovie movie={movie}/>)}
                    </div>
                </div>

                <div className={'col-7'}>
                    <div className={'p-2 m-2'}>
                        <div className={'row mt-4'}>
                            <div className={'col-8'}>
                                <h2>My Profile</h2>
                            </div>
                            <div className={'col-4 mt-2'}>
                                <button
                                    onClick={logout}
                                    className="btn btn-danger">
                                    Logout
                                </button>
                            </div>
                        </div>

                        <div className={'col-10'}>
                            <div className={'row'}>
                            <span className={'wd-username'}>
                                @{profile.username}
                            </span>
                            </div>

                            <div className={'wd-bold mt-2'}>
                                Email: {email}
                            </div>

                            <div>
                                <input
                                    ref={emailRef}
                                    placeholder="new email"
                                    type="email"
                                />
                                <button
                                    className={'btn btn-primary rounded-pill wd_small ms-4'}
                                    onClick={editMyEmail}>
                                    Edit
                                </button>
                            </div>

                            <div className={'wd-bold mt-2'}>
                                Password: {password}
                            </div>

                            <div>
                                <input
                                    ref={passwordRef}
                                    placeholder="new password"
                                    type="password"
                                />
                                <button
                                    className={'btn btn-primary rounded-pill wd_small ms-4'}
                                    onClick={editMyPassword}>
                                    Edit
                                </button>
                            </div>

                        </div>

                    </div>

                    <div className={'p-2 m-2 pt-4'}>
                        <h3>Following</h3>

                        {following.reverse().map((user) => <UserTile user={user}/>)}

                        <h3>Followers</h3>
                        {followers.reverse().map((user) => <UserTile user={user}/>)}
                    </div>
                </div>
            </div>}
        </>
    );
};

export default Profile;
