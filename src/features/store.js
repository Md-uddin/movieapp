import { configureStore } from '@reduxjs/toolkit'
import moviesReducer from './movie'
export const store = configureStore({
    reducer: {
        movies:moviesReducer
    },
});