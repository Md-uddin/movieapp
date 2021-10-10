import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies, getAllShows } from "../../features/movie";
import MovieCard from "../movieCard/movieCard";

import "./movielisting.scss";

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
    const shows = useSelector(getAllShows);
    

  if (!movies) return "loading.....................";

  let renderMovies = "";
  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div className="movies-error">
        <p>errorrrrrrrrrrrrr</p>
        <h3>{movies.Error}</h3>
      </div>
    );

  let renderShows = "";
  renderShows =
    shows.Response === "True" ? (
      shows.Search.map((movie, index) => <MovieCard key={index} data={movie} />)
    ) : (
      <div className="shows-error">
        <p>errorrrrrrrrrrrrr</p>
        <h3>{shows.Error}</h3>
      </div>
    );

  return (
    <>
      <div className="movie-wrapper">
        <div className="movie-list">
          <h2>Movies</h2>
          <div className="movie-container">{renderMovies}</div>
        </div>
          </div>
          <hr />
          { shows && <div className="movie-wrapper">
        <div className="movie-list">
          <h2>Shows</h2>
          <div className="movie-container">{renderShows}</div>
        </div>
      </div>}
      
    </>
  );
};

export default MovieListing;
