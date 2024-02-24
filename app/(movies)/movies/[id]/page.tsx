import { Suspense } from "react";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

interface MovieProps {
  params: { id: string };
  searchParams: {};
}

const MovieDetail = async (props: MovieProps) => {
  const id = props.params.id;
  return (
    <div>
      <h3>Movie detail page</h3>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        {/* @ts-expect-error Async Server Component */}
        <MovieInfo id={id}></MovieInfo>
      </Suspense>
      <Suspense fallback={<h1>Loading movie videos</h1>}>
        {/* @ts-expect-error Async Server Component */}
        <MovieVideos id={id}></MovieVideos>
      </Suspense>
    </div>
  );
};

export default MovieDetail;
