import React from 'react'
import MovieCard from '../MovieCard/MovieCard';

const MovieList = ({ title, movies }) => {
    return (
        <div className='mx-5'>
            <h2 className='mb-3 text-white font-semibold'>{title}</h2>
            <div className='flex overflow-x-scroll'>
                <div className='flex'>
                    {movies?.map((movie) => {
                        return movie.backdrop_path && <MovieCard key={movie.id} poster_path={movie.poster_path} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default MovieList;