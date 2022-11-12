import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";

import { fetchHome } from "../../services/fetch-api";


const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchHome()
      .then(data => {
          setMovies(data.results.map(result => ({ id: result.id, title: result.title })));
        })
      .catch(error => console.log(error));
    
  }, []);
  

  return (
    <main>
      <h1>Trending today</h1>
      <ul>
        {movies.map(({ id, title }) => {
          return (
            <li key={id}>
              <Link to={`movies/${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          )
        })}
      </ul>
    </main>
  );
};

Home.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};

export default Home;