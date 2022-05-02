import React from "react";
import {Link} from "react-router-dom";

const Movie = ({movie}) => {
    return (
        <div>
            <h5>{movie.title}</h5>
            <h6>Description: {movie.overview}</h6>
            <h6>Genre: {movie.name}</h6>
                <img src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path} alt={movie.path} />

        </div>
    );
};
export default Movie;