import { useState,useEffect } from 'react';
import { MoviesList } from "../components/MoviesList/MoviesList";
//import { getProducts } from "../fakeAPI";
const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'e338843fab235d92204cc1e536c80b21';


const Home = () => {
  //const products = getProducts();
//const navigate = useNavigate();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    function fetchMovies() {
      fetch(`${API_URL}trending/movie/day?api_key=${API_KEY}`)
        .then(response => response.json())
        .then(data => {
          setMovies(data.results.map(result => ({ id: result.id, title: result.title })));
          console.log(data);
        })
        .catch(error => console.log(error));
    }
    fetchMovies();
  }, []);
  
  console.log(movies);

  /*const handleSubmit = async values => {
    const response = await fetch(`${API_URL}trending/movie/day?api_key=${API_KEY}`);
    const data = await response.json();
    if (response) {
      console.log(data);
      
      //navigate("/profile", { replace: true });
      //.success
    }
  };

  handleSubmit().then(movies => {
    //console.log(movies.results);
    
    //return movies.results;
  });*/

  /**/

  return (
    <main>
      <h1>Trending today</h1>
      <MoviesList movies={movies} />
    </main>
  );
};

export default Home;