import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../slice/userSlice';
import moviesReducer from '../slice/moviesSlice';

export const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer
    },
});