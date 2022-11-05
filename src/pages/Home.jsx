import { MoviesList } from "../components/MoviesList/MoviesList";
import { getProducts } from "../fakeAPI";

const Home = () => {
  const products = getProducts();
  return (
    <main>
      <h1>Trending today</h1>
      <MoviesList products={products} />
    </main>
  );
};

export default Home;