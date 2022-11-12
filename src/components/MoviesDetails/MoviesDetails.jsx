import PropTypes from 'prop-types';
import { useParams, useLocation, Link, Outlet } from "react-router-dom";
import { useState, useEffect } from 'react';
import { Suspense } from 'react';

import { Main } from "./MoviesDetails.styled";
import { MovieInfo } from "components/MovieInfo/MovieInfo";
import { fetchMoviesDetails } from "../../services/fetch-api";

const MoviesDetails = () => {
  const [movies, setMovie] = useState({});
  const { id } = useParams();
  const location = useLocation();
  const backLink = location.state?.from ?? '/movies';

  useEffect(() => {
    fetchMoviesDetails(id)
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
      .catch(error => console.log(error));
    
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
          <Link to="cast" state={{ from: backLink }}>Cast</Link>
        </li>
        <li>
          <Link to="reviews" state={{ from: backLink }}>Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </Main>
  );
};


MoviesDetails.propTypes = {
  details: PropTypes.arrayOf(
    PropTypes.exact({
      poster_path: PropTypes.string,
      original_title: PropTypes.string.isRequired,
      popularity: PropTypes.number.isRequired,
      overview: PropTypes.string.isRequired,
      genres: PropTypes.arrayOf(
        PropTypes.exact({
          name: PropTypes.string.isRequired,
        })
      ),
    })
  )
};

export default MoviesDetails;