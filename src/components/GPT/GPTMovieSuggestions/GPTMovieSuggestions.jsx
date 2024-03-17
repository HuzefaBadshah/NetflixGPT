import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from '../../SecondaryContainer/MovieList/MovieList';

const GPTMovieSuggestions = () => {
    const { movieResults, movieNames } = useSelector((store) => store.gpt);
    return (
        <div className='mt-10 bg-black'>
            {movieNames && movieNames.map((movieName, i) => <MovieList key={movieName} title={movieName} movies={movieResults[i]} />)}
        </div>
    )
}

export default GPTMovieSuggestions