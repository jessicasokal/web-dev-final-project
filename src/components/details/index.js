import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useLocation} from "react-router-dom";

const api = axios.create({
    withCredentials: false
});

const DetailsPage = () => {
    const location = useLocation().pathname;
    const textArray = location.split('/');
    const movieID = textArray[2];
    console.log(movieID)
    const [currentMovie, setCurrentMovie] = useState();

    const url =
        "https://api.themoviedb.org/3/movie/popular?api_key=9e019a5736bc48ae537fdcff22fd8a1e&language=en-US&page=1";

    useEffect(() => {
        fetchCurrentMovie();
    }, []);


    const fetchCurrentMovie = async () => {
        try {
            const response = await api.post(`http://localhost:4000/api/movies`, {
                imdbID: movieID,
                comments: [],
                likes: 0
            })
            const res = await api.get(`http://localhost:4000/api/movies/${movieID}`)
            setCurrentMovie(res.data)
            console.log(`set movie`)

        } catch (e) {

        }

    }

    return (
        <div className={'row'}>
            <div className={'col-3'}>
                {currentMovie._id}
            </div>
        </div>
    )

}

export default DetailsPage;