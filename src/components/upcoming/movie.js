import React from "react";
import {Link} from "react-router-dom";

const Movie = ({movie}) => {
    return (
        <div>
            <h5>{movie.title}</h5>
            <Link to={`/details/${movie.id}`}>
                <img src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path} alt={movie.path} />
            </Link>

        </div>
    );
};
export default Movie;