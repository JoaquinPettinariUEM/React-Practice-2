import { useGetMoviesBySearch } from "../services/api";
import MovieCard from "../components/MovieCard";
import { Grid } from "@mui/material";
import { useSearchParams } from "react-router-dom";

export default function Search() {
  const [searchParams] = useSearchParams();
  const { data: movies } = useGetMoviesBySearch(searchParams.get("search") ?? "");

  if (!movies?.results) return <h3>No hay resultados</h3>;

  return (
    <Grid container spacing={2}>
      {movies?.results?.map(movie => (
        <Grid key={movie.id} size={{ xs: 12, md: 6, lg: 4, xl: 3 }}>
          <MovieCard movie={movie} />
        </Grid>
      ))}
    </Grid>
  );
}
