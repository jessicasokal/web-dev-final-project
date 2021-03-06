import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";

const DetailsPage = () => {
    const location = useLocation().pathname;
    const textArray = location.split('/');
    const movieID = textArray[2];
    const [currMovie, setMovie] = useState();

    const url =
        `https://api.themoviedb.org/3/movie/${movieID}?api_key=9e019a5736bc48ae537fdcff22fd8a1e`;

    useEffect(() => {
        fetchMovie();
    });

    const fetchMovie = async () => {
        const data = await fetch(url);
        const movie = await data.json();
        setMovie(movie)
        console.log('setting movie')

    };

    return (
        <div className={'row'}>
            <div className={'col-3'}>
                {currMovie.title}
                {currMovie.overview}
                {currMovie.popularity}
                {currMovie.status}
                {currMovie.tagline}
                {currMovie.vote_count}
            </div>
        </div>
    )

}

export default DetailsPage;