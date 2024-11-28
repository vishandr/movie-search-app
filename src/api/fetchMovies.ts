import { useQuery } from '@tanstack/react-query';

const API_URL = 'https://api.themoviedb.org/3';
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

// Хук для получения фильмов из строки поиска
const fetchMovies = async (query: string) => {
  const response = await fetch(
    `${API_URL}/search/movie?query=${query}&api_key=${API_KEY}`
  );
  if (!response.ok) {
    throw new Error('Failed to fetch movies');
  }
  return response.json();
};

export const useSearchMovies = (query: string) => {
  return useQuery({
    queryKey: ['movies', query],
    queryFn: () => fetchMovies(query),
    enabled: query.length > 3,
    staleTime: 1000 * 60 * 5, // Кеширование данных на 5 минут
    retry: 1, // Повторить один раз, если запрос не удался
  });
};
