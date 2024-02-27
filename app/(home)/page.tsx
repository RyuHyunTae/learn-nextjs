import Movie from "../../components/movie";
import style from "../../styles/home.module.css";
import { API_URL } from "../constants";

export const metadata = {
  title: "Home",
};

const getMoives = async () => {
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
};

const HomePage = async () => {
  const movies = await getMoives();
  return (
    <div className={style.container}>
      {movies.map((movie) => (
        <Movie key={movie.id} id={movie.id} poster_path={movie.poster_path} title={movie.title} />
      ))}
    </div>
  );
};

export default HomePage;
