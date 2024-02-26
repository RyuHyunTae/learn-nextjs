import { API_URL } from "../app/(home)/page";
import style from "../styles/movie-video.module.css";

const getVideos = async (id: string) => {
  // throw new Error("something broke...");
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
};

const MovieVideos = async ({ id }: { id: string }) => {
  const videos = await getVideos(id);

  return (
    <div className={style.container}>
      {videos.map((video) => {
        return (
          <iframe
            key={video.id}
            src={`https://youtube.com/embed/${video.key}`}
            title={video.name}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        );
      })}
    </div>
  );
};

export default MovieVideos;
