import { useGetPopularMovies } from "../services/api";
import MovieCard from "../components/MovieCard";
import { Grid } from "@mui/material";

export default function Home() {
  const { data: movies } = useGetPopularMovies();

  if (!movies) return <h2>No hay películas</h2>;
  return (
    <div>
      <h1>Películas populares</h1>
      <Grid container spacing={2}>
        {movies?.results?.map(movie => (
          <Grid key={movie.id} size={{ xs: 12, md: 6, lg: 4, xl: 3 }}>
            <MovieCard movie={movie} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
