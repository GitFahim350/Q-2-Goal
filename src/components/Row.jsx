import React, { useEffect, useState, useRef } from 'react';
import axios from '../axios';
import './Row.css';
import { BrowserRouter as Router, Route, Routes ,Navigate,NavLink} from 'react-router-dom'
import MovieDetails from './MovieDetails';


function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);
  const rowRef = useRef(null);
  const base_url = "https://image.tmdb.org/t/p/original/";
  
  const [selectedMovie, setSelectedMovie] = useState(null);
  

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(fetchUrl);
      setMovies(response.data.results);
    }
    fetchData();
  }, []);

  const handleScroll = (scrollOffset) => {
    const row = rowRef.current;
    const currentPosition = row.scrollLeft;
    const newPosition = currentPosition + scrollOffset;
    
    row.style.transition = 'scroll-left 0.5s ease-in-out';
    row.style.scrollBehavior = 'smooth';
    row.scrollTo({ left: newPosition, behavior: 'smooth' });
  
    setTimeout(() => {
      row.style.transition = '';
      row.style.scrollBehavior = '';
    }, 500);
  };
  

  const handleMouseEnter = (event) => {
    const image = event.target;
    image.classList.add('enlarge');
  };
  
  const handleMouseLeave = (event) => {
    const image = event.target;
    image.classList.remove('enlarge');
  };

  const handleClick = (movie) => {
    
    
    console.log("movie on handle click", movie);
  };
  



  return (
    <div className="row">
      <h2 className="row__title">{title}</h2>

      <div className="movies" ref={rowRef}>
        {movies.map((movie) => (
          
          <img
            className={`rowposter ${isLargeRow && 'row_large_poster'}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(movie)}

          />
        
      ))}
      </div>
      
      <div className="row__scrollButtons">
        <button
          className="leftrightbutton LeftButton"
          onClick={() => handleScroll(-500)}
        >
          {"<"}
        </button>
        <button
          className=" leftrightbutton RightButton"
          onClick={() => handleScroll(500)}
        >
          {">"}
        </button>
      </div>
    </div>
  );
}

export default Row;
