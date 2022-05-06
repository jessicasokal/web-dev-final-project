import React, {useEffect, useState} from "react";
import Movie from "./movie";
import './index.css';
import {Link} from "react-router-dom";
import {fetchAllUsers} from "../../services/user-service";
import UserTile from "./user-tile";
import MovieTile from "./movie-tile";
import {useProfile} from "../../contexts/profile-context";
import ProfileMovie from "../profile/profile-movie";

const Home = () => {
    const {profile} = useProfile()
    const url =
        "https://api.themoviedb.org/3/movie/popular?api_key=9e019a5736bc48ae537fdcff22fd8a1e&language=en-US&page=1";
    const [popular, setPopular] = useState([]);
    const [users, setUsers] = useState([]);

    // get popular movies to populate home page
    const fetchPopular = async () => {
        const data = await fetch(url);
        const movies = await data.json();
        console.log(movies);
        setPopular(movies.results);
    };

    useEffect(() => {
        fetchPopular();
    }, []);

    // get users to populate recently joined
    const fetchUsers = async () => {
        const allUsers = await fetchAllUsers()
        setUsers(allUsers)
    }

    useEffect(() => {
        fetchUsers();
    }, []);


    return (
        <div className="mt-5">
            <div className={'row'}>
                <div className={'col-9'}>
                    <h1>Movies Featured Today</h1>
                    <div className="popular-movies">
                        {popular.map((m) => {
                            return <div>
                                <Link to={`/details/${m.id}`}>
                                    <Movie key={m.id} movie={m} />
                                </Link>
                                <MovieTile imdbMovie={m}/>
                            </div>
                        })}
                    </div>
                </div>
                <div className={'col-3 ps-3'}>
                    { profile &&
                        <>
                            <div className={'row'}>
                                <div className={'col-3'}>
                                    <img src={'./images/default-user-image.png'} className={'wd-profile-picture'}/>
                                </div>
                                <div className={'col-9'}>
                                    <h2>@{profile.username}</h2>
                                </div>
                            </div>
                            <hr/>
                            </>
                    }

                    <h3>Recently Joined</h3>
                    <ul className={'list-group'}>
                        {users.reverse().map((user) => <UserTile user={user}/>)}
                    </ul>
                    {
                        profile &&
                        <div className={'mt-3'}>
                            <hr/>
                            <h3>Liked Movies</h3>
                            {profile.likedMovies.reverse().map((movie) =>
                                <Link to={`/details/${movie.imdbID}`}>
                                    <ProfileMovie movie={movie}/>
                                </Link>)}
                        </div>

                    }
                </div>
            </div>
        </div>
    );
};
export default Home;
