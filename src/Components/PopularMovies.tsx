import { MovieCard } from './MovieCard';
import { Movie } from '../types';

interface PopularMoviesProps {
  movies: Movie[];
  isLoading: boolean;
}

const PopularMovies: React.FC<PopularMoviesProps> = ({ movies, isLoading }) => {
  if (isLoading) {
    return <p>Loading popular movies...</p>;
  }

  return (
    <div>
      <h2 className='text-center mt-4'>Popular Movies</h2>
      <div className='p-8 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default PopularMovies;
