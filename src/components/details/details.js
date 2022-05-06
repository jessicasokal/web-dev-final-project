import React, {useState, useEffect} from "react";
import {useLocation} from "react-router-dom";
import './index.css';
import Movie from "./movie";
import {getUser} from "../../services/user-service";
import {fetchMovieByIMDBID} from "../../services/movie-service";


const Details = () => {
    const location = useLocation().pathname;
    const textArray = location.split('/');
    const movieID = textArray[2];
    const [movie, setMovie] = useState([])
    const [ourMovie, setOurMovie] = useState([])

    const url =
        `https://api.themoviedb.org/3/movie/${movieID}?api_key=9e019a5736bc48ae537fdcff22fd8a1e`;

    useEffect(() => {
        fetchMovie();
    });

    const fetchMovie = async () => {
        const data = await fetch(url);
        const movie = await data.json();
        console.log(`MOVIE: ${JSON.stringify(movie)}`)
        setMovie(movie)
    };

    // get the movie corresponding to the paths ID
    const fetchOurMovie = async () => {
        const selectedMovie = await fetchMovieByIMDBID(movieID)
        setOurMovie(selectedMovie)
    }

    useEffect(() => {
        fetchOurMovie()
    }, [])

    return (
        <div className={'row mt-4'}>
            <div className={'col-5'}>
                <img src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path} alt={movie.path} />
            </div>
            <div className={'col-7 ps-2'}>
                <h1>{movie.title}</h1>
                <div className={'m-2'}>{movie.overview}</div>
                <h5 className={'m-2'}>Release date: {movie.release_date}</h5>
                <h5 className={'m-2'}>Likes: {ourMovie.likes}</h5>

            </div>
            <h3>Comments</h3>




        </div>


    );
};
;
export default Details;