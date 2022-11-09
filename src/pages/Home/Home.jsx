import { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
//import { MoviesList } from "../components/MoviesList/MoviesList";

const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'e338843fab235d92204cc1e536c80b21';


const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    function fetchMovies() {
      fetch(`${API_URL}trending/movie/day?api_key=${API_KEY}`)
        .then(response => response.json())
        .then(data => {
          setMovies(data.results.map(result => ({ id: result.id, title: result.title })));
        })
        .catch(error => console.log(error));
    }
    fetchMovies();
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
      {/*<MoviesList movies={movies} />*/}
    </main>
  );
};

export default Home;