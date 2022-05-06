import React from 'react';
import {Link} from "react-router-dom";

const MovieList = (props) => {

    return (
        <>
            {props.movies.map((movie) => (
                <div className='wd-search-image-size'>
                    <Link to={`/details-search/${movie.imdbID}`}>
                        <img src={movie.Poster}/>
                    </Link>
                </div>
            ))}
        </>
    );
};

export default MovieList;