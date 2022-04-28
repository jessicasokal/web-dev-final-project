import React, { useEffect, useState } from "react";
import Movie from "./movie";
import "./index.css";
import axios from "axios";
import UserTile from "./user-tile";

const api = axios.create({
    withCredentials: false
});

const Home = () => {
    const url =
        "https://api.themoviedb.org/3/movie/popular?api_key=9e019a5736bc48ae537fdcff22fd8a1e&language=en-US&page=1";
    const [popular, setPopular] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchPopular();
    }, []);

    useEffect(() => {
        fetchUsers();
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

    return (
        <div className="App">
            <div className={'row'}>
                <div className={'col-9'}>
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
                            {users.map((user) => <UserTile user={user}/>)}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Home;