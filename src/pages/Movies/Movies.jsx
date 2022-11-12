import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

import { fetchMovies } from "../../services/fetch-api";

import { Wrapper, Form, Input, Button, Icon } from "./Movies.styled";

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParam = searchParams.get('query');
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState(queryParam ? queryParam : '');
  const location = useLocation();

  useEffect(() => {

    if (query === '') {
      return;
    };

    fetchMovies(query)
      .then(data => {
          setMovies(
            data.results.map(({ id, title }) => ({ id: id, title: title })),
          );
        })
      .catch(error => console.log(error));
    
    /*function fetchMovie(query) {
      fetch(`${API_URL}search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`)
        .then(response => response.json())
        .then(data => {
          setMovies(
            data.results.map(({ id, title }) => ({ id: id, title: title })),
          );
        })
      .catch(error => console.log(error));
    }
    
    fetchMovie();*/
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();

    const value = e.target.query.value;
    setQuery(value);
    setSearchParams({ query: value });
  };

  return (
    <main>
      <Wrapper>
        <Form action="" onSubmit={handleSubmit}>
          <Input
            type="text"
            name="query"     
          />
          <Button type="submit">
            <Icon />
          </Button>
        </Form>
      </Wrapper>
      <ul>
        {movies.map(({ id, title }) => {
          return (
            <li key={id}>
              <Link
                to={`${id}`}
                search={{ querySerch: `query=${query}` }}
                state={{ from: location }}
              >
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

Movies.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};

export default Movies;