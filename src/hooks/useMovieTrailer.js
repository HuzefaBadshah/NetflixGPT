import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addMovieTrailer } from "../redux/slice/moviesSlice";

function useMovieTrailer(movieId) {
    const dispatch = useDispatch();

    const trailerVideo = useSelector((store) => store.movies.trailerVideo);

    async function fetchMovieVideos() {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);

        const json = await data.json();
        const filteredData = json.results.filter((movie) => movie.type === "Trailer");
        const trailer = filteredData.length ? filteredData[0] : json.results[0];
        dispatch(addMovieTrailer(trailer));
    }

    useEffect(() => {
        // an exapmle of memoization
        !trailerVideo && fetchMovieVideos();
    }, []);

};

export default useMovieTrailer;