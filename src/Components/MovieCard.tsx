//MovieCard.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import MoviePoster from './MoviePoster';
import { Movie } from '../types';

interface MovieCardProps {
  movie: Movie;
}

export const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <div className='cursor-pointer bg-white p-4 shadow-md'>
      <Link to={`/movie/${movie.id}`}>
        <MoviePoster posterPath={movie.poster_path} title={movie.title} />
        <div className='px-6 py-4'>
          <h3 className='text-lg font-semibold text-gray-800'>{movie.title}</h3>
          <p className='text-sm text-gray-600'>
            {movie.overview.slice(0, 88)}...
          </p>
        </div>
      </Link>
    </div>
  );
};
