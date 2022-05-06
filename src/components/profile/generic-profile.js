import React, {useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";
import './profile.css';
import {
    getUser,
    updateFollowers,
    updateFollowing,
    findFollowers,
    findFollowing,
    findLikedMovies
} from "../../services/user-service";
import {useProfile} from "../../contexts/profile-context";
import UserTile from "../home/user-tile";
import ProfileMovie from "./profile-movie";


const GenericProfile = () => {
    const {profile} = useProfile();

    let location = useLocation().pathname;
    const textArray = location.split('/');
    const userID = textArray[2];

    const [user, setUser] = useState([])

    const [followers, setFollowers] = useState([])
    const [following, setFollowing] = useState([])
    const [likedMovies, setLikedMovies] = useState([])

    // get the user corresponding to the paths ID
    const fetchUser = async () => {
        const selectedUser = await getUser(userID)
        setUser(selectedUser)
    }

    useEffect(() => {
        fetchUser()
    }, [])

    // set followers of user
    const fetchFollowers = async () => {
        const followers = await findFollowers(userID)
        setFollowers(followers);
    }

    useEffect(() => {
        fetchFollowers();
    }, []);

    // set following of user
    const fetchFollowing = async () => {
        const following = await findFollowing(userID)
        setFollowing(following);
    }

    useEffect(() => {
        fetchFollowing();
    }, []);

    // set liked movies of user
    const fetchLikedMovies = async () => {
        const likedMovies = await findLikedMovies(userID)
        setLikedMovies(likedMovies);
    }

    useEffect(() => {
        fetchLikedMovies();
    }, []);


    // handle following users
    const handleFollow = async () => {
       await updateFollowers(user, profile)
       await updateFollowing(user, profile)
    }

    return(
        <div className={'row'}>
            <div className={'col-5 mt-4 wd-background-grey'}>
                <div className={'p-2 m-2'}>
                    <h4>Liked Movies</h4>
                    {likedMovies.map((movie) => {
                        return <Link to={`/details/${movie.imdbID}`}>
                            <ProfileMovie movie={movie}/>
                        </Link>
                    })}
                </div>
            </div>

            <div className={'col-7'}>
                <div className={'p-2 m-2'}>
                    <div className={'col-10'}>
                        <div className={'row'}>
                            <div className={'col-8'}>
                                <span className={'wd-header-username'}>@{user.username}
                                </span>
                            </div>
                            <div className={'col-4 mt-3'}>
                                <button className={'btn btn-primary'}
                                onClick={handleFollow}>
                                    Follow
                                </button>
                            </div>
                        </div>

                        <div className={'row wd_bold mt-2'}>
                            <span className={'wd-email'}>
                                <span className={'wd-contact-text'}>Contact: </span>
                            {user.email}</span>
                        </div>
                    </div>

                    <div className={'pt-4'}>
                        <h3>Following</h3>
                        <ul className={'list-group'}>
                            {following.reverse().map((user) => <UserTile user={user}/>)}
                        </ul>
                        <h3>Followers</h3>
                        <ul className={'list-group'}>
                            {followers.reverse().map((user) => <UserTile user={user}/>)}
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default GenericProfile;

