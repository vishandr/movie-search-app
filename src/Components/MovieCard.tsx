import React from 'react';

export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
}

interface MovieCardProps {
  movie: Movie;
}

export const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <div className='max-w-sm rounded overflow-hidden shadow-lg'>
      <img
        className='w-full'
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <div className='px-6 py-4'>
        <div className='font-bold text-xl mb-2'>{movie.title}</div>
        <p className='text-gray-700 text-base'>{movie.overview}</p>
      </div>
    </div>
  );
};
