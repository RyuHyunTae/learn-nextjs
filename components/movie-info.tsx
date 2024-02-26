import { API_URL } from "../app/(home)/page";
import style from "../styles/movie-info.module.css";

export const getMovie = async (id: string) => {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
};

const MovieInfo = async ({ id }: { id: string }) => {
  const movie = await getMovie(id);

  return (
    <div className={style.container}>
      <img src={movie.poster_path} alt={movie.title} className={style.poster}></img>
      <div className={style.info}>
        <h1 className={style.title}>{movie.title}</h1>
        <h3>* {movie.vote_average.toFixed(2)}</h3>
        <p>{movie.overview}</p>
        <a href={movie.homepage} target={"_blank"}>
          Home page
        </a>
      </div>
    </div>
  );
};

export default MovieInfo;
