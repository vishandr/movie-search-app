import { useQuery } from '@tanstack/react-query';

const API_URL = 'https://api.themoviedb.org/3';
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

// Хук для получения популярных фильмов
const fetchPopularMovies = async () => {
  const response = await fetch(`${API_URL}/movie/popular?api_key=${API_KEY}`);
  if (!response.ok) {
    throw new Error('Failed to fetch popular movies');
  }
  return response.json();
};

export const usePopularMovies = () => {
  return useQuery({
    queryKey: ['popularMovies'],
    queryFn: fetchPopularMovies,
    staleTime: 1000 * 60 * 10,
  });
};
