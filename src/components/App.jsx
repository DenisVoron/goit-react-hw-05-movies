import { Routes, Route  } from "react-router-dom";
//import { useNavigate } from "react-router-dom";
import Home from "../pages/Home";
import Movies from "../pages/Movies";
import MoviesDetails from "../pages/MoviesDetails/MoviesDetails";
import Cast from "./Cast/Cast";
import NotFound from "../pages/NotFound";
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
          <Link to="/movies">Movies</Link>
        </nav>
        <Logo>
          GoMovies Store
        </Logo>
      </Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/:id" element={<MoviesDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      </Container>
  );
};



//<Route path="/products" element={<Products />} />
//import Products from "path/to/pages/Products";





/*export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      React homework template
    </div>
  );
};*/
