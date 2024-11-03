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
    <div className='p-8 min-h-screen bg-gray-100'>
      <div className='max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden md:flex'>
        {/* Movie Poster */}
        <div className='md:w-1/2'>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
            alt={movie?.title}
            className='w-full h-auto'
          />
        </div>

        {/* Movie Details */}
        <div className='md:w-1/2 p-6'>
          <h2 className='text-3xl font-bold mb-4'>{movie?.title}</h2>
          <p className='mb-4'>{movie?.overview}</p>
          <div className='text-gray-700 mb-2'>
            <strong>Release Date:</strong> {movie?.release_date}
          </div>
          <div className='text-gray-700 mb-2'>
            <strong>Rating:</strong> {movie?.vote_average}
          </div>
          {/* Additional movie info */}
          <div className='text-gray-700 mb-2'>
            <strong>Genres:</strong>{' '}
            {movie?.genres.map((genre) => genre.name).join(', ')}
          </div>
          <div className='flex flex-wrap gap-4 mt-6'>
            <span className='bg-green-100 text-green-800 px-3 py-1 rounded-full'>
              Language: {movie.original_language}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
