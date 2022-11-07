import { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
//import { SearchBox } from "../../components/SearchBox/SearchBox";
import { MoviesList } from "../../components/MoviesList/MoviesList";
import { Wrapper,Form, Input, Button, Icon } from "./Movies.styled";


const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'e338843fab235d92204cc1e536c80b21';

const Movies = () => {

  //const rambo = '';
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParam = searchParams.get('query');
  console.log(queryParam);
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState(queryParam ? queryParam : '');
  console.log(query);

  useEffect(() => {

    if (query === '') {
      return;
    };

    function fetchMovie() {
      fetch(`${API_URL}search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`)
        .then(response => response.json()).then(data => {
          console.log(data);
          setMovies(
            data.results.map(({ id, title }) => ({ id: id, title: title })),
          );
        })
        .catch(error => console.log(error));
    }

    fetchMovie();
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();

    const value = e.target.query.value;
    console.log(value);
    setQuery(value);
    setSearchParams({ query: value });
  };


  return (
    <main>
      <Wrapper>
        <Form action="" onChange={handleSubmit}>
          <Input
            type="text"
            name="query"     
          />
          <Button type="submit">
            <Icon />
          </Button>
        </Form>
      </Wrapper>
      {movies && <MoviesList movies={movies} />}
    </main>
  );
};

export default Movies;

//value={productName} onChange={} 