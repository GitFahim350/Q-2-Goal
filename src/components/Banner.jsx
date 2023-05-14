import React, { useState, useEffect } from 'react';
import axios from '../axios';
import requests from '../requests';
import './Banner.css';

const Banner = () => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await axios.get(requests.fetchNetflixOriginals);
      const data = response.data.results;
      setMovie(data[Math.floor(Math.random() * data.length - 1)]);
    };
    fetchMovie();
  }, []);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
  };

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">{movie?.name || movie?.title || movie?.original_name}</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <p className="banner__description">{truncate(movie?.overview, 150)}</p>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
};

export default Banner;