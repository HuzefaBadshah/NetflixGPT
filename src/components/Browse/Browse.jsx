import React from 'react'
import Header from '../Header/Header';
import useNowPlayingMovies from '../../hooks/useNowPlayingMovies';
import MainContainer from '../MainContainer/MainContainer';
import SecondaryContainer from '../SecondaryContainer/SecondaryContainer';
import GptSearch from '../GPT';
import { useSelector } from 'react-redux';

const Browse = () => {
    const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
    useNowPlayingMovies();

    return (
        <div className='overflow-hidden'>
            <Header />
            {
                showGptSearch ? <GptSearch /> :
                    <>
                        <MainContainer />
                        <SecondaryContainer /></>
            }

        </div>
    )
}

export default Browse;