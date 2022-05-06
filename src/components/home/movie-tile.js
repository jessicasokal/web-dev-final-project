import React, {useEffect, useRef, useState} from "react";
import {addComment, addLike, createMovieInDatabase} from "../../services/movie-service";
import {useProfile} from "../../contexts/profile-context";
import {useNavigate} from "react-router-dom";
import {addToMyComments, addToMyLikes} from "../../services/user-service";
import './index.css'


const MovieTile = (imdbMovie) => {
    const [likes, setLikes] = useState(undefined)
    const [currMovie, setCurrMovie] = useState([])
    const navigate = useNavigate()
    const {profile} = useProfile()
    const commentRef = useRef()

    // creating a new movie
    const createMovie = async (movie) => {
        const currMovie = await createMovieInDatabase(movie.imdbMovie.id)
        setCurrMovie(currMovie)
    }

    useEffect(() => {
        createMovie(imdbMovie)
    }, [])

    // allow user to like movie
    const handleLike = async () => {
        // only allow liking if signed in
        if (profile) {
            const likes = await addLike(currMovie)
            setLikes(likes)
            await addToMyLikes(profile, currMovie)
        } else {
            navigate('/login')
        }
    }

    // allow user to comment on movie
    const handleComment = async () => {
        // only allow commenting if signed in
        if (profile) {
            console.log(`CURR MOVIE: ${JSON.stringify(currMovie)}`)
            await addComment(currMovie, commentRef.current.value)
            await addToMyComments(profile, currMovie, commentRef.current.value)
        } else {
            navigate('/login')
        }
    }

    return (
        <div>
            <div className={'row'}>
                <input className='ms-2 wd-smaller-width'
                       placeholder={'Comment'}
                       type={'text'}
                       id={'comment'}
                       ref={commentRef}/>
                <div className={'row'}>
                    <div className={'col-6'}>
                        {
                            !likes &&
                            currMovie.likes
                        }
                        {
                            likes
                        }
                        <span> Likes</span>
                        <button className={'btn btn-primary wd-width ms-2'}
                                onClick={handleLike}>
                            Like
                        </button>
                    </div>
                    <div className={'col-6'}>
                        <button className={'btn btn-secondary wd-width'}
                                onClick={handleComment}
                        >
                            Comment
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
};
export default MovieTile;
