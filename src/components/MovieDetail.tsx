import { useParams } from "react-router-dom";
import { useGetMovieDetails } from "../services/api";

export default function MovieDetail() {
  const { id } = useParams();
  const { data: movie } = useGetMovieDetails(id!);

  if (!movie) return <p>Cargando...</p>;

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <p>⭐ {movie.vote_average}</p>
    </div>
  );
}
