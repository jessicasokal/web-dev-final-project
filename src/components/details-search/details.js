import React, {useState, useEffect} from "react";
import {useLocation} from "react-router-dom";
import './index.css';
import Movie from "./movie";
import {getUser} from "../../services/user-service";
import {createMovieInDatabase, fetchComments, fetchMovieByIMDBID} from "../../services/movie-service";
import DetailsCommentTile from "./details-comment-tile";


const Details = () => {
    const location = useLocation().pathname;
    const textArray = location.split('/');
    const movieID = textArray[2];
    const [movie, setMovie] = useState([])
    const [ourMovie, setOurMovie] = useState([])
    const [comments, setComments] = useState([])

    const url =
        `http://www.omdbapi.com/?apikey=7ba0a1dd&i=${movie.imdbID}`;

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
        const selectedMovie = await createMovieInDatabase(movieID)
        setOurMovie(selectedMovie)
    }

    useEffect(() => {
        fetchOurMovie()
    }, [])

    // get the comments corresponding to the movie
    const fetchOurMovieComments = async () => {
        const comments = await fetchComments(movieID)
        setComments(comments)
    }

    useEffect(() => {
        fetchOurMovieComments()
    }, [])

    return (
        <div className={'row mt-4'}>
            <div className='wd-search-image-size'>
                <img src={movie.Poster}/>
            </div>
            <div className={'col-7 ps-2'}>
                <h1>{movie.Title}</h1>
                <div className={'m-2'}>{movie.Plot}</div>
                <h5 className={'m-2'}>Release date: {movie.Released}</h5>
                <h5 className={'m-2'}>Likes: {ourMovie.likes}</h5>

            </div>
            <h3>Comments</h3>
            {comments.map((comment) => {
                return <DetailsCommentTile comment={comment}/>
            })}




        </div>


    );
};
;
export default Details;