import { Link } from "react-router-dom";
import { ListMovies, ItemsMovie, MoviesName } from "./MoviesList.styled";

export const MoviesList = ({movies}) => {
  console.log(movies);
  return (
    <ListMovies>
      {movies.map(({id, title}) => (
        <ItemsMovie key={id}>
          <Link to={`/${id}`}>
            <MoviesName>{title}</MoviesName>
          </Link>
        </ItemsMovie>
      ))}
    </ListMovies>
  );
};

//export default MoviesList;