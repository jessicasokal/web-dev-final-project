import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
import {followUser} from "../profile/follow/followUser";
import isLoggedIn from "../../global/variables";

const api = axios.create({
    withCredentials: true
});

const UserTile = ({user}) => {
    const [currentUser, setCurrentUser] = useState({})
    const navigate = useNavigate();

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

    return (
        <div className={'mb-2 mt-2 row'}>
            <div className={'col-8'}>
                {
                    (currentUser._id !== user._id) &&
                    <Link to={`/profile/${user._id}`}>
                        <li className={'list-group-item'}>
                            @{user.username}
                        </li>
                    </Link>
                }
                {
                    (currentUser._id === user._id) &&
                    <Link to={`/profile`}>
                        <li className={'list-group-item'}>
                            @{user.username}
                        </li>

                    </Link>
                }
            </div>
            <div className={'col-4'}>
                <button className={'btn btn-primary ms-5'}
                        onClick={() => {
                            if (!isLoggedIn.LOGGED_IN) {
                                navigate('/login')
                            }
                            else    {
                                followUser(currentUser, user)
                            }
                        }
                        }>
                    Follow
                </button>
            </div>

        </div>

    );
};

export default UserTile;

