import React, { useState, useEffect } from 'react';

import MovieList from './movie-list';
import MovieListHeading from './movie-list-heading';
import SearchBox from './search-box';

const Search = () => {
    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    const getMovieRequest = async (searchValue) => {
        const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=7ba0a1dd`;

        const response = await fetch(url);
        const responseJson = await response.json();

        if (responseJson.Search) {
            setMovies(responseJson.Search);
        }
    };

    useEffect(() => {
        getMovieRequest(searchValue);
    }, [searchValue]);



    return (
        <div>
            <div className='row mt-4 mb-4'>
                <MovieListHeading heading='Movies' />
                <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
            </div>
            <div>
                <MovieList
                    movies={movies}/>
            </div>
        </div>

    );
};

export default Search;