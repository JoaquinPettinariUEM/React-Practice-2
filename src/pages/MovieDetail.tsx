import { useParams } from "react-router-dom";
import { useGetMovieDetails } from "../services/api";
import { Box, Grid } from "@mui/material";
import { IMG_BASE } from "../types/movie";

export default function MovieDetail() {
  const { id } = useParams();
  const { data: movie, isLoading, error } = useGetMovieDetails(id!);

  if (isLoading) return <p>Cargando...</p>;
  if (error || !movie) return <p>Error cargando la película</p>;

  return (
    <Box>
      <div
        style={{
          backgroundImage: `url(${IMG_BASE}${movie.backdrop_path})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: 400,
          color: "white",
        }}
      />

      <Grid container spacing={2} sx={{ mt: 4, textAlign: "start" }}>
        <Grid size={{ xs: 12, md: 6, lg: 4 }}>
          <img
            src={`${IMG_BASE}${movie.poster_path}`}
            alt={movie.title}
            style={{ width: "300px", borderRadius: "10px" }}
          />
        </Grid>

        <Grid
          container
          sx={{ flexDirection: "column", gap: 2 }}
          size={{ xs: 12, md: 6, lg: 4 }}
        >
          <p>
            <strong>⭐ Rating:</strong> {movie.vote_average.toFixed(1)}
          </p>
          <p>
            <strong>Duración:</strong> {movie.runtime} min
          </p>
          <p>
            <strong>Fecha:</strong> {movie.release_date}
          </p>
          <p>
            <strong>Géneros:</strong> {movie.genres.map(g => g.name).join(", ")}
          </p>
          <p>
            <strong>País:</strong>{" "}
            {movie.production_countries.map(c => c.name).join(", ")}
          </p>
          <Box>
            <h2>Productoras</h2>
            <ul>
              {movie.production_companies.map(c => (
                <li key={c.id}>{c.name}</li>
              ))}
            </ul>
          </Box>

          {movie.homepage && (
            <p>
              <a href={movie.homepage} target="_blank">
                Ver sitio oficial
              </a>
            </p>
          )}
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 4 }}>
          <h2>Sinopsis</h2>
          <p>{movie.overview}</p>
        </Grid>
      </Grid>
    </Box>
  );
}
