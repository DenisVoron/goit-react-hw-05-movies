import { useParams, Link, Outlet } from "react-router-dom";
import { useState, useEffect } from 'react';
//import { getProductById } from "../../fakeAPI";
import {
  Main,
  Image,
  Wrapper,
  DescrScore,
  Title,
  OverwiewTitle,
  OverwiewDescr,
  GenresDescr,
  GenresText
} from "./MoviesDetails.styled";

const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'e338843fab235d92204cc1e536c80b21';

const MoviesDetails = () => {
  const { id } = useParams();
  
  const [movies, setMovie] = useState('');
  console.log(movies);
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



  console.log(movies.poster);

  return (
    <Main>
      <Wrapper>
        <Image src={movies.poster} alt="" />
        <div>
        <Title>
          {movies.title}
        </Title>
        <DescrScore>{`User Score: ${movies.score} %`}</DescrScore>
        <OverwiewTitle>Overwiew</OverwiewTitle>
          <OverwiewDescr>{ movies.overview}</OverwiewDescr>
        <GenresDescr>Genres</GenresDescr>
          <GenresText>{movies.genres}</GenresText>
          </div>
      </Wrapper>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </Main>
  )
};

export default MoviesDetails;