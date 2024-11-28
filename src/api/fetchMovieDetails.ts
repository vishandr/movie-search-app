//api/fetchMovieDetails.ts
// import { useQuery } from '@tanstack/react-query';
import { Movie } from '../types';

const API_URL = 'https://api.themoviedb.org/3';
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export const fetchMovieDetails = async (
  id: string,
  language: string
): Promise<Movie> => {
  const response = await fetch(
    `${API_URL}/movie/${id}?api_key=${API_KEY}&language=${language}`
  );
  if (!response.ok) {
    throw new Error('Failed to fetch movie details');
  }
  return response.json();
};

// export const useFetchMovieDetails = (
//   id: string | undefined,
//   language: string
// ) => {
//   return useQuery<Movie>({
//     queryKey: ['movie', id, { language }],
//     queryFn: () => fetchMovieDetails(id!, language),
//     enabled: !!id, // Запрос выполняется только при наличии id
//   });
// };
