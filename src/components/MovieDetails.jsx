import React from 'react';
import './MovieDetails.css';

function MovieDetails({ movie }) {

 {console.log("movie"+{movie})}
  return (
    <div className="movie-details">
      <div className="movie-details__background">
        <img
          className="movie-details__background-image"
          src={movie.backdrop_path}
          alt={movie.title}
        />
      </div>
      <div className="movie-details__content">
        <div className="movie-details__info">
          <h2 className="movie-details__title">{movie.title}</h2>
          <p className="movie-details__overview">{movie.overview}</p>
          {/* Add more movie details here */}
        </div>
        <div className="movie-details__actions">
          <button className="movie-details__play-button">Play</button>
          <button className="movie-details__watchlist-button">Add to Watchlist</button>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
