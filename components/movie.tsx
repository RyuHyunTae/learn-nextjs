"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "../styles/movie.module.css";

interface MovieProps {
  id: string;
  poster_path: string;
  title: string;
}

const Movie = ({ id, poster_path, title }: MovieProps) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/movies/${id}`);
  };
  return (
    <div className={styles.movie}>
      <img src={poster_path} alt={title} onClick={handleClick} />
      <Link href={`/movies/${id}`}>{title}</Link>
    </div>
  );
};

export default Movie;
