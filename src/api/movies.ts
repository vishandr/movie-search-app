const API_URL = 'https://api.themoviedb.org/3';
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export const searchMovies = async (query: string) => {
  const response = await fetch(
    `${API_URL}/search/movie?query=${query}&api_key=${API_KEY}`
  );
  if (!response.ok) {
    throw new Error('Failed to fetch movies');
  }
  return response.json();
};
