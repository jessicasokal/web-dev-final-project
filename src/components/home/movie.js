import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import isLoggedIn from "../../global/variables";
import {useNavigate} from "react-router-dom";

const Movie = ({movie}) => {

    return (
        <div>
            <h5>{movie.title}</h5>
                <img src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path} alt={movie.path} />
        </div>
    );
};
export default Movie;