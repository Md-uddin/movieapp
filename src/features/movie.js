import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import moveiApi from "../common/Apis/moveiApi";
import { APIKEY } from "../common/Apis/moveiApiKey";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async () => {
    let movieText = "Harry";

    const response = await moveiApi
      .get(`?apikey=${APIKEY}&s=${movieText}&type=movie`)
      .catch((err) => console.log(err));
    return response.data;
  }
);

export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async () => {
    let seriesText = "Friends";

    const response = await moveiApi
      .get(`?apikey=${APIKEY}&s=${seriesText}&type=series`)
      .catch((err) => console.log(err));
    return response.data;
  }
);
export const fetchAsyncMovieOrShow = createAsyncThunk(
  "movies/fetchAsyncMoviesOrShow",
  async (id) => {
    const response = await moveiApi
      .get(`?apikey=${APIKEY}&i=${id}&Plot=full`)
      .catch((err) => console.log(err));
    return response.data;
  }
);

const initialState = {
  movies: {},
  shows: {},
  selectedMovieOrShow: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    // addMovies: (state, { payload }) => {
    //   state.movies = payload;
    //   //in older version
    //   //{...state,payload}
    // },
    removeSelectedMovieOrShow: (state) => {
      state.selectedMovieOrShow = {}
    }
  },
  //extrareducers    - for common type diffrent action
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("Pending");
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("fulfilled");
      console.log(payload);
      return { ...state, movies: payload };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("rejected");
    },
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      console.log("fulfilled");
      return { ...state, shows: payload };
    },
    [fetchAsyncMovieOrShow.fulfilled]: (state, { payload }) => {
      console.log("fulfilled");
      return { ...state, selectedMovieOrShow: payload };
    },
  },
});

export const { removeSelectedMovieOrShow } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMovieOrShow = (state) =>
  state.movies.selectedMovieOrShow;
export default movieSlice.reducer;
