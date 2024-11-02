// pages/MovieDetails.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Movie } from '../Components/MovieCard';

const fetchMovieDetails = async (id: string) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${
      import.meta.env.VITE_TMDB_API_KEY
    }`
  );
  if (!response.ok) {
    throw new Error('Failed to fetch movie details');
  }
  return response.json();
};

const MovieDetails = () => {
  const { id } = useParams<{ id: string }>();
  const {
    data: movie,
    isLoading,
    error,
  } = useQuery<Movie>({
    queryKey: ['movie', id],
    queryFn: () => fetchMovieDetails(id!),
    enabled: !!id, // Запрос выполняется только при наличии id
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading movie details</div>;

  return (
    <div className='p-8'>
      <h2 className='text-3xl font-bold'>{movie?.title}</h2>
      <p>{movie?.overview}</p>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
        alt={movie?.title}
        className='mt-4 w-full h-auto'
      />
      <p>Release Date: {movie?.release_date}</p>
      <p>Rating: {movie?.vote_average}</p>
    </div>
  );
};

export default MovieDetails;
