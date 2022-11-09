import { useParams,useLocation, Link, Outlet } from "react-router-dom";
import { useState, useEffect } from 'react';
import { Suspense } from 'react';

import { Main } from "./MoviesDetails.styled";

import { MovieInfo } from "components/MovieInfo/MovieInfo";

const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'e338843fab235d92204cc1e536c80b21';

const MoviesDetails = () => {
  const [movies, setMovie] = useState({});
  const { id } = useParams();
  const location = useLocation();
  const backLink = location.state?.from ?? '/movies';

  useEffect(() => {
    function fetchMovie() {
      fetch(`${API_URL}movie/${id}?api_key=${API_KEY}&language=en-US`)
        .then(response => response.json())
        .then(data => {
          setMovie({
            poster: `https://image.tmdb.org/t/p/w500/${data.poster_path}`,
            title: data.title,
            score: Number.parseInt(data.vote_average * 10),
            overview: data.overview,
            genres: data.genres
              .reduce((acc, genre) => (acc += genre.name + '. '), '')
              .trim(),
          })
        })
    }
    
    fetchMovie();
  }, [id]);


  return (
    <Main>
      <Link to={backLink}>Go Back</Link>
      <MovieInfo
        poster={movies.poster}
        title={movies.title}
        score={movies.score}
        overview={movies.overview}
        genres={movies.genres}
      />
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </Main>
  );
};

export default MoviesDetails;