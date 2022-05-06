import React, {useState, useEffect} from "react";
import {useLocation} from "react-router-dom";
import './index.css';
import Movie from "./movie";


const Details = () => {
    const location = useLocation().pathname;
    const textArray = location.split('/');
    const movieID = textArray[2];
    const [movie, setMovie] = useState([])

    const url =
        `https://api.themoviedb.org/3/movie/${movieID}?api_key=9e019a5736bc48ae537fdcff22fd8a1e`;

    useEffect(() => {
        fetchMovie();
    });

    const fetchMovie = async () => {
        const data = await fetch(url);
        const movie = await data.json();
        setMovie(movie)
        console.log('setting movie')
    };


    return (
        <div className={'row'}>
            <div className="movie-details">
                <Movie key={movie.id} movie={movie} />
            </div>
            <table>
                <tr>
                    <th>Movie Details</th>
                </tr>
                <tr>
                    Overview: {JSON.stringify(movie.overview)}
                </tr>
                <tr>
                    Release Date: {JSON.stringify(movie.release_date)}
                </tr>
                <tr>
                    Tagline: {JSON.stringify(movie.tagline)}
                </tr>

            </table>

        </div>


    );
};
;
export default Details;