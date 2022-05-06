import React, {useEffect, useState} from "react";

const ProfileMovie = (movie) => {
    //console.log(JSON.stringify(movie.movie))
    const [imdbMovie, setimdbMovie] = useState()

    const url =
        `https://api.themoviedb.org/3/movie/${movie.movie.imdbID}?api_key=9e019a5736bc48ae537fdcff22fd8a1e`;

    const fetchMovie = async () => {
        const data = await fetch(url);
        const movie = await data.json();
        setimdbMovie(movie)
    };

    useEffect(() => {
        fetchMovie();
    });


    return (
        <div>
            {   imdbMovie &&
                <div>
                        <h5>{imdbMovie.title}</h5>
                        <img src={"https://image.tmdb.org/t/p/w500" + imdbMovie.backdrop_path} alt={imdbMovie.path} />
                </div>
            }

        </div>
    );
};
export default ProfileMovie;