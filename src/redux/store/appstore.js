import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../slice/userSlice';
import moviesReducer from '../slice/moviesSlice';
import gptReducer from '../slice/GPTSlice';

export const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer,
        gpt: gptReducer
    },
});