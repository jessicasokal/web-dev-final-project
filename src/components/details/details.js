import React, {useState, useEffect, useRef} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import './index.css';
import {addToMyComments, addToMyLikes} from "../../services/user-service";
import {
    addComment,
    addLike,
    createMovieInDatabase,
    fetchComments,
    fetchMovieByIMDBID
} from "../../services/movie-service";
import DetailsCommentTile from "./details-comment-tile";
import {useProfile} from "../../contexts/profile-context";


const Details = () => {
    const navigate = useNavigate()
    const {profile} = useProfile()
    const location = useLocation().pathname;
    const textArray = location.split('/');
    const movieID = textArray[2];
    const [movie, setMovie] = useState([])
    const [ourMovie, setOurMovie] = useState([])
    const [comments, setComments] = useState([])
    const commentRef = useRef()
    const [likes, setLikes] = useState(undefined)

    const url =
        `https://api.themoviedb.org/3/movie/${movieID}?api_key=9e019a5736bc48ae537fdcff22fd8a1e`;

    useEffect(() => {
        fetchMovie();
    });

    const fetchMovie = async () => {
        const data = await fetch(url);
        const movie = await data.json();
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

    // allow user to like movie
    const handleLike = async () => {
        // only allow liking if signed in
        if (profile) {
            const likes = await addLike(ourMovie)
            setLikes(likes)
            await addToMyLikes(profile, ourMovie)
        } else {
            navigate('/login')
        }
    }

    // allow user to comment on movie
    const handleComment = async () => {
        // only allow commenting if signed in
        if (profile) {
            await addComment(ourMovie, commentRef.current.value, profile)
            await addToMyComments(profile, ourMovie, commentRef.current.value)
        } else {
            navigate('/login')
        }
    }

    return (
        <div className={'row mt-4'}>
            <div className={'col-5'}>
                <img src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path} alt={movie.path} />
            </div>
            <div className={'col-7 ps-2'}>
                <h1>{movie.title}</h1>
                <div className={'m-2'}>{movie.overview}</div>
                <h5 className={'m-2'}>Release date: {movie.release_date}</h5>
                <h5 className={'m-2'}>Likes:
                    {   !likes &&
                        ourMovie.likes
                    }
                    {   likes
                    }</h5>

            </div>
            <h3>Comments</h3>
            <input className='ms-2'
                   placeholder={'Comment'}
                   type={'text'}
                   id={'comment'}
                   ref={commentRef}/>
            <div className={'row mb-4'}>
                <div className={'col-6 mt-3'}>
                    <button className={'btn btn-primary wd-width ms-2'}
                            onClick={handleLike}>
                        Like
                    </button>
                </div>
                <div className={'col-6 mt-3'}>
                    <button className={'btn btn-secondary wd-width'}
                            onClick={handleComment}
                    >
                        Comment
                    </button>
                </div>
            </div>
            {comments.map((comment) => {
                return <DetailsCommentTile comment={comment} movie={ourMovie}/>
            })}

        </div>


    );
};
;
export default Details;