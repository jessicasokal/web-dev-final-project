import React, { useEffect, useState } from "react";
import Movie from '../home/movie.js';
import "./index.css";
import {Link} from "react-router-dom";


const Upcoming = () => {
    const url =
        "https://api.themoviedb.org/3/movie/upcoming?api_key=9e019a5736bc48ae537fdcff22fd8a1e&language=en-US&page=1";
    const [upcoming, setUpcoming] = useState([]);


    const fetchUpcoming = async () => {
        const data = await fetch(url);
        const movies = await data.json();
        console.log(movies);
        setUpcoming(movies.results.slice(0,6));
    };

    useEffect(() => {
        fetchUpcoming();
    }, []);


    return (
        <div className="mt-4">
            <div className={'row'}>
                    <h1>Upcoming Movies</h1>
                    <div className="popular-movies">
                        {upcoming.map((movie) => {
                            return <Link to={`/details/${movie.id}`}>
                                        <Movie key={movie.id} movie={movie}/>
                                    </Link>
                            ;
                        })}
                    </div>
            </div>
        </div>
    );
};
export default Upcoming;