import React, { useEffect, useState } from "react";
import Movie from "./movie";
import "./index.css";
import axios from "axios";
import UserTile from "./user-tile";
import LOGGED_IN from '../login-registration/signin.js';

const api = axios.create({
    withCredentials: false
});

const Home = () => {
    const url =
        "https://api.themoviedb.org/3/movie/popular?api_key=9e019a5736bc48ae537fdcff22fd8a1e&language=en-US&page=1";
    const [popular, setPopular] = useState([]);
    const [users, setUsers] = useState([]);
    const [currentUser, setCurrentUser] = useState({})

    useEffect(() => {
        fetchPopular();
    }, []);

    useEffect(() => {
        fetchUsers();
    }, []);

    useEffect(() => {
        fetchCurrentUser();
    }, []);

    const fetchPopular = async () => {
        const data = await fetch(url);
        const movies = await data.json();
        console.log(movies);
        setPopular(movies.results);
    };

    const fetchUsers = async () => {
        try {
            const response = await api.get("http://localhost:4000/api/users")
            setUsers(response.data)
        } catch (e) {
            alert(e)
        }
    };

    const fetchCurrentUser = async () => {
        try {
            const response = await api.post("http://localhost:4000/api/profile")
            setCurrentUser(response.data)
        } catch (e) {
            // no user logged in
        }
    }

    return (
        <div className="App">
            <div className={'row'}>
                <div className={'col-9'}>
                    {
                        LOGGED_IN && <div>{currentUser.username}</div>
                    }
                    <h1>Movies Featured Today</h1>
                    <div className="popular-movies">
                        {popular.map((movie) => {
                            return <Movie key={movie.id} movie={movie} />;
                        })}
                    </div>
                </div>
                <div className={'col-3'}>
                    <div>
                        <h4>Recently Joined</h4>
                        <ul className={'list-group'}>
                            {users.reverse().map((user) => <UserTile user={user}/>)}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Home;