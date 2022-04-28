import React, { useEffect, useState } from "react";
import Movie from "./movie";
import "./index.css";

const Home = () => {
    const url =
        "https://api.themoviedb.org/3/movie/popular?api_key=9e019a5736bc48ae537fdcff22fd8a1e&language=en-US&page=1";
    const [popular, setPopular] = useState([]);
    useEffect(() => {
        fetchPopular();
    }, []);
    const fetchPopular = async () => {
        const data = await fetch(url);
        const movies = await data.json();
        console.log(movies);
        setPopular(movies.results);
    };
    return (
        <div className="App">
            <h1>Movies Featured Today</h1>
            <div className="popular-movies">
                {popular.map((movie) => {
                    return <Movie key={movie.id} movie={movie} />;
                })}
            </div>
        </div>
    );
};
export default Home;