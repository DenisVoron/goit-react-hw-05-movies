import { Routes, Route  } from "react-router-dom";
//import { lazy } from 'react';

import { Container, Header, Logo, Link } from "./App.styled";

import Home from '../pages/Home/Home';
import Movies from "../pages/Movies/Movies";
import MoviesDetails from "./MoviesDetails/MoviesDetails";
import Cast from "./Cast/Cast";
import Reviews from "./Reviews/Reviews";
import NotFound from "../pages/NotFound";

/*const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const MoviesDetails = lazy(() => import('./MoviesDetails/MoviesDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));*/
//const NotFound = lazy(() => import('../pages/NotFound'));


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
        <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
  );
};
