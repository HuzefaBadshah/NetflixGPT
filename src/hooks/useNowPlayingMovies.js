import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../redux/slice/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS, NOW_PLAYING_API_URL } from "../utils/constants";

function useNowPlayingMovies() {
    const dispatch = useDispatch();

    async function fetchNowPlayingMovies() {
        try {

            const data = await fetch(NOW_PLAYING_API_URL, API_OPTIONS);

            const moviesData = await data.json();

            dispatch(addNowPlayingMovies(moviesData.results));
        } catch (error) {
            console.log('error now playing: ', error);
        }
    }

    useEffect(() => {
        fetchNowPlayingMovies();
    }, []);
}

export default useNowPlayingMovies;