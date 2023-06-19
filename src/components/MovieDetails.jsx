import React from 'react';
import { useLocation } from 'react-router-dom';
import './MovieDetails.css';

function MovieDetails() {
  const location = useLocation();
  const movie = location.state.movie;
  const base_url = "https://image.tmdb.org/t/p/original/";

  return (
 <div className="movie-details">
      <div className="movie-details__header">
        <div className="movie-details__poster-container">
          <img
              className="movie-details__poster"
              src={`${base_url}${movie.backdrop_path}`}
              alt={movie.original_name}
            />
        </div>
        <div className="movie-details__info">
          <h2 className="movie-details__title">{movie.original_name}</h2>
          <div className="movie-details__metadata">
            <p className="movie-details__release-date">
              Release Date: {movie.first_air_date}
            </p>
            <p className="movie-details__genres">
              Genres: {movie.genre_ids.join(', ')}
            </p>
            <p className="movie-details__overview">{movie.overview}</p>
          </div>
          <div className="movie-details__buttons">
            <button className="movie-details__button">Play</button>
            <button className="movie-details__button">Add to Watchlist</button>
          </div>
        </div>
      </div>
      <div className="movie-details__footer">
        <p className="movie-details__rating">
          Rating: {movie.vote_average} / 10 ({movie.vote_count} votes)
        </p>
        <p className="movie-details__origin-country">
          Origin Country: {movie.origin_country&&movie.origin_country.join(', ')}
        </p>
      </div>
    </div>
  );
}

export default MovieDetails;
