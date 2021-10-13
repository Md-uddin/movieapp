import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import MovieListing from '../movieListing/movieListing'
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movie'
const Home = () => {
   
    const dispatch = useDispatch();
    useEffect(() => {

        dispatch(fetchAsyncMovies())
        dispatch(fetchAsyncShows())
    },[dispatch])
    return (
        <div className="banner-img">
           <MovieListing/>
        </div>
    )
}

export default Home
