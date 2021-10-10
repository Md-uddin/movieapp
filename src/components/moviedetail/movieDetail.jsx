import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { useParams } from 'react-router'
import { fetchAsyncMovieOrShow, getSelectedMovieOrShow, removeSelectedMovieOrShow } from '../../features/movie';

import "./movieDetails.scss"
const MovieDetail = () => {
    const dispatch = useDispatch();
    const {ImdbID } = useParams();
    const data = useSelector(getSelectedMovieOrShow)
    console.log(data)
    useEffect(() => {
        dispatch(fetchAsyncMovieOrShow(ImdbID))
        return () => {
            dispatch(removeSelectedMovieOrShow())
        }
    }, [dispatch,ImdbID])
    return (
        <div className="movie-section">
            {Object.keys(data).length === 0 ?
                <div>...loading</div>
                :
            
                <>
                    <div className="section-left">
                        <div className="movie-title">{data.title}
                        </div>
                        <div className="movie-rating">
                            <span>
                                IMDB Rating
                                <i className="fa fa-star">:{data.imdbRating}</i></span>
                            <span>
                                IMDB Votes
                                <i className="fa fa-thumbs-up">:{data.imdbVotes}</i></span>
                            <span>
                                Runtime
                                <i className="fa fa-film">:{data.Runtime}</i></span>
                            <span>
                                Year
                                <i className="fa fa-calendar">:{data.Year}</i></span>
                        </div>
                        <div className="movie-plot">{data.Plot}</div>
                        <div className="movie-info">
                            <div>
                                <span>Director</span>
                                <span>{data.Director}</span>
                            </div>
                            <div>
                                <span>Stars</span>
                                <span>{data.Stars}</span>
                            </div>
                            <div>
                                <span>Generes</span>
                                <span>{data.Generes}</span>
                            </div>
                            <div>
                                <span>Languages</span>
                                <span>{data.Languages}</span>
                            </div>
                            <div>
                                <span>Awards</span>
                                <span>{data.Awards}</span>
                            </div>
                        </div>
                    </div>
                    <div className="section-right">
                        <img src={data.Poster} alt={data.Title} />
                    </div>
                </>
            }
        </div>
    )
}

export default MovieDetail
