import { Link } from "react-router-dom";
import { ListMovies, ItemsMovie, MoviesName } from "./MoviesList.styled";

export const MoviesList = ({ products }) => {
  return (
    <ListMovies>
      {products.map((product) => (
        <ItemsMovie key={product.id}>
          <Link to={`${product.id}`}>
            <MoviesName>{product.name}</MoviesName>
          </Link>
        </ItemsMovie>
      ))}
    </ListMovies>
  );
};

//export default MoviesList;