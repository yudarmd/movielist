import './App.css';
import { getMovieList, searchMovie } from './api';
import { useEffect, useState } from 'react';

const App = () => {

  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    getMovieList().then((result) => {
      setMovieList(result);
    });
  }, []);

  const PopularMovies = () => {
    return movieList.map((movie, i) => {
      return (
          <div className="card" key={i}>
          <img src={`${process.env.REACT_APP_BASEIMAGEURL}/${movie.poster_path}`} alt="Movie Poster" className="card-img" />
          <div className="content">
            <div className='title'>{movie.original_title}</div>
            <div className='release-date'>{movie.release_date}</div>
            <div className='overview'>{movie.overview.slice(0, 100) + (movie.overview.length > 100 ? "..." : "")}</div>
            <div className='vote-average'><span role="img" aria-label="star">⭐</span> {movie.vote_average}</div>
          </div>
        </div>
      );
    });
  };

  const searchPopularMovie = async (query) => {
    if (query.length > 3) {
      const searchResult = await searchMovie(query);
      setMovieList(searchResult);
    }
  };


  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar">
          <div className="navbar-brand">
            <span className='navbar-logo'>MVL</span>
          </div>
          <div className="navbar-content">
            <ul className="navbar-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#movies">Movies</a></li>
              <li><a href="#tvshows">TV Shows</a></li>
              <li><a href="#celebrities">Celebrities</a></li>
            </ul>
            <div className="search-form">
              <input
              type="text"
              placeholder="Search..."
              className="search-input"
              onChange={(e) => searchPopularMovie(e.target.value)}
              />
            </div>
          </div>
        </nav>
      </header>
      <div className="container-fluid">
        <div className="card-container">
          <PopularMovies />
        </div>
      </div>
    </div>
  );
}

export default App;
