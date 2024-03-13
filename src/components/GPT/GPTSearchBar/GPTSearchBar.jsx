import React, { useRef } from 'react';
import styles from './GPTSearchBar.module.scss';
// import openai from '../../../utils/openai';
import { API_OPTIONS } from '../../../utils/constants';
import { addGptMovieResult } from '../../../redux/slice/GPTSlice';
import { useDispatch } from 'react-redux';

const GPTSearchBar = () => {

    const searchRef = useRef();
    const dispatch = useDispatch();

    async function getMovie(movie) {
        const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`, API_OPTIONS);
        const json = await data.json();
        return json.results;
    }

    async function handleSubmit(e) {
        e.preventDefault();
        // const gptQuery =
        //     "Act as a Movie Recommendation system and suggest some movies for the query : " +
        //     searchRef.current.value +
        //     ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

        // This is not working as of now
        // try {

        //     const movies = await openai.chat.completions.create({
        //         messages: [{ role: 'user', content: gptQuery }],
        //         model: 'gpt-3.5-turbo',
        //     });
        // } catch (error) {

        //     console.log("GPT movies error: ", error);
        // }
        const movieStr = "The Conjuring, Get Out, Hereditary, A Quiet Place, Insidious";
        const movieArr = movieStr.split(',');
        const moviePromises = movieArr.map((movie) => getMovie(movie));
        const results = await Promise.all(moviePromises);
        dispatch(addGptMovieResult({ movieNames: movieArr, movieResults: results }));
    }

    return (
        <form className={`${styles['gpt-search-form']} bg-black flex self-center items-center gap-4 justify-center p-5`} onSubmit={handleSubmit}>
            <input ref={searchRef} placeholder='what would you like to search?' className='h-10 w-full px-4' type="text" name="search" />
            <button className='py-2 px-4 bg-red-700 text-white rounded-lg' type="submit">Search</button>
        </form>
    )
};

export default GPTSearchBar;