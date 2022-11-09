import { Routes, Route  } from "react-router-dom";
//import { useNavigate } from "react-router-dom";

import Home from "../pages/Home/Home";
import Movies from "../pages/Movies/Movies";
import MoviesDetails from "./MoviesDetails/MoviesDetails";
import Cast from "./Cast/Cast";
//import NotFound from "../pages/NotFound";
import Reviews from "./Reviews/Reviews";
import { Container, Header, Logo, Link } from "./App.styled";


export const App = () => {

  return (
    <Container>
      <Header>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="movies">Movies</Link>
        </nav>
        <Logo>
          GoMovies
        </Logo>
      </Header>
      <Routes>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:id" element={<MoviesDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        {/*<Route path="*" element={<NotFound />} />*/}
        </Routes>
      </Container>
  );
};
