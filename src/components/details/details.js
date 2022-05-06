import React, {useState, useEffect} from "react";
import {useLocation} from "react-router-dom";

const Details = () => {
    const location = useLocation().pathname;
    const textArray = location.split('/');
    const movieID = textArray[2];
    const [movie, setMovie] = useState()

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

    return (
        <div>
            {JSON.stringify(movie)}
        </div>
    );
};
export default Details;