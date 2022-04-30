import React, {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import axios from "axios";


const api = axios.create({
    withCredentials: false
});

const OtherProfile = () => {
    let location = useLocation().pathname;
    const textArray = location.split('/');
    const [user, setUser] = useState([]);
    const userId = textArray[2];

    useEffect(() => {
        fetchUser();
    }, []);

    const fetchUser = async () => {
        try {
            const response = await api.get(`http://localhost:4000/api/users/${userId}`)
            setUser(response.data)
        } catch (e) {
            alert(e)
        }
    };
    return(
        <div>
            <h1>User Profile</h1>
            <div className={'row'}>
                <div className={'col-10'}>
                    <div className={'row'}>
                    <span className={'wd_username'}>@{user.username}
                        <button className={'btn btn-primary rounded-pill wd_small ms-4'}
                        >Follow</button>
                    </span>
                    </div>

                    <div className={'row mt-3'}>
                        <div>
                            <span className={'wd_bold'}>
                            Email:
                            </span>
                            {user.email}

                        </div>


                    </div>
                    <div className={'row'}>
                        <div className={'pt-5 wd_sidebar'}>Liked Movies</div>
                        {user.likedMovies}
                    </div>
                </div>

                <div className={'col-2'}>
                    <div className={'wd_sidebar'}>Following</div>
                    {user.following}
                    <div className={'wd_sidebar'}>Followers</div>
                    {user.followers}
                </div>
                {JSON.stringify(user)}
            </div>
            <br/>
            <br/>
            <br/>
            <br/>

        </div>
    )
}

export default OtherProfile;