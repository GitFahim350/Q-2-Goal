import React, { useEffect, useState, useRef } from 'react';
import axios from '../axios';
import './Row.css';

function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);
  const rowRef = useRef(null);
  const base_url="https://image.tmdb.org/t/p/original/";
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(fetchUrl);
      setMovies(response.data.results);
    }
    fetchData();
  }, []);

  const handleScroll = (scrollOffset) => {
    rowRef.current.scrollLeft += scrollOffset;
  };

  return (
    <div className="row">
      <h2 className="row__title">{title}</h2>
      <div className="movies" ref={rowRef}>
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`rowposter ${isLargeRow && 'row_large_poster'}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            onClick={() => console.log(movie)}
          />
        ))}
      </div>
      <div className="row__scrollButtons">
        <button className="leftrightbutton LeftButton" onClick={() => handleScroll(-500)}>{"<"}</button>
        <button className=" leftrightbutton RightButton" onClick={() => handleScroll(500)}>{">"}</button>
      </div>
    </div>
  );
}

export default Row;
