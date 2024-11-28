import { MovieCard } from './MovieCard';
import { Movie } from '../types';

interface MovieResultsProps {
  movies: Movie[];
}

const MovieResults: React.FC<MovieResultsProps> = ({ movies }) => {
  return (
    <div>
      <h2 className='text-center pt-2'>Search Results</h2>
      <div className='p-8 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieResults;
