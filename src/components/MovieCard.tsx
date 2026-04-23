import { Link } from "react-router-dom";
import type { Movie } from "../types/movie";

interface Props {
  movie: Movie;
}

export default function MovieCard({ movie }: Readonly<Props>) {
  return (
    <Link to={`/movie/${movie.id}`}>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
          alt={movie.title}
        />
        <h3>{movie.title}</h3>
      </div>
    </Link>
  );
}
