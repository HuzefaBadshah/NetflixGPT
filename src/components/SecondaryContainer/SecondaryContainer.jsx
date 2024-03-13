import React from 'react'
import { useSelector } from 'react-redux';
import MovieList from './MovieList/MovieList';

const SecondaryContainer = () => {
    const movies = useSelector((store) => store.movies.nowPlayingMovies);

    return (
        movies && <div className='bg-black'>
            <div className='-mt-32 relative z-20'>
                <MovieList title='Now Playing' movies={movies} />
                <MovieList title='Now Playing' movies={movies} />
                <MovieList title='Now Playing' movies={movies} />
                <MovieList title='Now Playing' movies={movies} />
                <MovieList title='Now Playing' movies={movies} />
            </div>
        </div>
    )
}

export default SecondaryContainer