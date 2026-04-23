import { useQuery } from "@tanstack/react-query";
import type { MovieDetail, MoviesResponse } from "../types/movie";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;
const TOKEN = import.meta.env.VITE_TMDB_TOKEN;

const fetchFromTMDB = async (endpoint: string) => {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error("Error en la API");
  }

  return res.json();
};

const getPopularMovies = async (): Promise<MoviesResponse> => {
  return fetchFromTMDB(`/movie/popular?api_key=${API_KEY}`);
};

const getMovieDetails = async (id: string): Promise<MovieDetail> => {
  return fetchFromTMDB(`/movie/${id}?api_key=${API_KEY}`);
};

const searchMovies = async (query: string): Promise<MoviesResponse> => {
  return fetchFromTMDB(`/search/movie?api_key=${API_KEY}&query=${query}`);
};

export const useGetPopularMovies = () => {
  return useQuery({
    queryKey: ["popular-movies"],
    queryFn: getPopularMovies,
  });
};

export const useGetMovieDetails = (id: string) => {
  return useQuery({
    queryKey: ["movie-details", id],
    queryFn: () => getMovieDetails(id),
    enabled: !!id,
  });
};

export const useGetMoviesBySearch = (search: string) => {
  return useQuery({
    queryKey: ["search", search],
    queryFn: () => searchMovies(search),
    enabled: search.length > 1,
  });
};
