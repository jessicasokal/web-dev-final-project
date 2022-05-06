import React, {useEffect, useState} from "react";
import {addLike, createMovieInDatabase} from "../../services/movie-service";
import {useProfile} from "../../contexts/profile-context";
import {useNavigate} from "react-router-dom";
import {addToMyLikes} from "../../services/user-service";


const MovieTile = (imdbMovie) => {
    const [likes, setLikes] = useState(undefined)
    const [currMovie, setCurrMovie] = useState([])
    const navigate = useNavigate()
    const {profile} = useProfile()

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

    return (
        <div>
            <div className={'row'}>
                <input className='ms-2 wd-smaller-width'
                       placeholder={'Comment'} type={'text'} id={'comment'}/>
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
/*
    // create movie in our local database
    const createMovie = async (movie) => {
        await createMovieInDatabase(movie)
    }

    useEffect(() => {
        createMovie(movie);
    }, []);

    // get the movie from local database
    const fetchMovie = async (movieID) => {
        try {
            const thisMovie = await fetchMovieByIMDBID(movieID)
            setThisMovie(thisMovie)
        } catch (e) {
            alert(e)
        }

    }

    useEffect(() => {
        fetchMovie(movie.id);
    }, []);

    // fetch initial likes
    const fetchMovieLikes = async (movieID) => {
        try {
            const likes = await fetchLikes(movieID)
            setLikes(likes)
        } catch (e) {
            console.log(e)
        }

    }

    useEffect(() => {
        fetchMovieLikes(movie.imdbID);
    }, []);


    // allow user to like movie
    const handleLike = async () => {
        const likes = await addLike(thisMovie)
        setLikes(likes)
    }
 */

/*
    // fetch initial likes
    const fetchMovieLikes = async (movieID) => {
        try {
            const likes = await fetchLikes(movieID)
            setLikes(likes)
        } catch (e) {
            console.log(e)
        }

    }

    useEffect(() => {
        fetchMovieLikes(movie.imdbID);
    }, []);




            <Link to={`/details/${movie.id}`}>
                <Movie key={movie.id} movie={movie} />
            </Link>
            <div className={'row'}>
                <input className='ms-2 wd-smaller-width'
                       placeholder={'Comment'} type={'text'} id={'comment'}/>
                <div className={'row'}>
                    <div className={'col-6'}>
                        {likes} Likes
                        <button className={'btn btn-primary wd-width ms-2'}
                        onClick={handleLike}>
                            Like
                        </button>
                    </div>
                    <div className={'col-6'}>
                        <button className={'btn btn-secondary wd-width'}
                        >
                            Comment
                        </button>
                    </div>
                </div>
            </div>
 */