import React from 'react'
import VideoBackground from './VideoBackground/VideoBackground'
import VideoTitle from './VideoTitle/VideoTitle'
import useNowPlayingMovies from '../../hooks/useNowPlayingMovies'
import { useSelector } from 'react-redux'

const MainContainer = () => {
    const movies = useSelector((store) => store.movies?.nowPlayingMovies);

    useNowPlayingMovies();

    if (!movies) return;

    const { original_title, overview, id } = movies[0];

    return (
        <div className='main-container'>
            <VideoBackground movieId={id} />
            <VideoTitle title={original_title} overview={overview} />
        </div>
    )
}

export default MainContainer