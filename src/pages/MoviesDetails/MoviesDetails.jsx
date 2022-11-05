import { useParams, Link,Outlet } from "react-router-dom";
import { getProductById } from "../../fakeAPI";
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

const MoviesDetails = () => {
  const { id } = useParams();
  const product = getProductById(id);
  
  return (
    <Main>
      <Wrapper>
        <Image src="https://via.placeholder.com/960x240" alt="" />
        <div>
        <Title>
          Product - {product.name}
        </Title>
        <DescrScore>User Score: </DescrScore>
        <OverwiewTitle>Overwiew</OverwiewTitle>
        <OverwiewDescr>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
          sunt excepturi nesciunt iusto dignissimos assumenda ab quae cupiditate
          a, sed reprehenderit? Deleniti optio quasi, amet natus reiciendis
          atque fuga dolore? Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Impedit suscipit quisquam incidunt commodi fugiat aliquam
          praesentium ipsum quos unde voluptatum?
        </OverwiewDescr>
        <GenresDescr>Genres</GenresDescr>
          <GenresText>Genres Genres Genres</GenresText>
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