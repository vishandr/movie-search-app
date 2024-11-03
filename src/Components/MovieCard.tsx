import React from 'react';
import { useNavigate } from 'react-router-dom';

interface Genre {
  id: number;
  name: string;
}

export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  genres: Genre[];
  original_language: string;
  original_title: string;
}

interface MovieCardProps {
  movie: Movie;
}

export const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movie/${movie.id}`);
  };

  return (
    <div
      onClick={handleClick}
      className='cursor-pointer bg-white p-4 shadow-md'
    >
      <img
        className='w-full'
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <div className='px-6 py-4'>
        <h3 className='text-lg font-semibold'>{movie.title}</h3>
      </div>
    </div>
  );
};
