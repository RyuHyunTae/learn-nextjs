import Movie from "../../components/Movie";
import style from "../../styles/home.module.css";

export const metadata = {
  title: "Home",
};

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

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
