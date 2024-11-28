import { Switch } from '@/Components/ui/switch';
import MoviePoster from '../Components/MoviePoster';
import { useSuspenseQuery } from '@tanstack/react-query';
import { fetchMovieDetails } from '../api/fetchMovieDetails';

const MovieDetailsContent = ({
  id,
  language,
  handleLanguageChange,
}: {
  id: string;
  language: string;
  handleLanguageChange: () => void;
}) => {
  const { data: movie } = useSuspenseQuery({
    queryKey: ['movie', id, { language }],
    queryFn: () => fetchMovieDetails(id, language),
  });

  return (
    <div className='p-8 min-h-screen bg-gray-100'>
      <div className='max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden md:flex'>
        {/* Movie Poster */}
        <div className='md:w-1/2'>
          <MoviePoster
            posterPath={movie?.poster_path || null}
            title={movie?.title || 'No Title'}
          />
        </div>

        {/* Movie Details */}
        <div className='md:w-1/2 p-6'>
          <div className='flex justify-end gap-x-2'>
            <span>EN </span>
            <Switch
              checked={language === 'ru'}
              onCheckedChange={handleLanguageChange}
            />
            <span> RU</span>
          </div>
          <h2 className='text-3xl font-bold mb-4'>{movie?.original_title}</h2>
          {movie?.original_title !== movie?.title && (
            <h3 className='text-2xl font-bold mb-4'>{movie?.title}</h3>
          )}
          {language === 'ru' ? (
            movie?.overview ? (
              <p className='mb-4'>{movie.overview}</p>
            ) : (
              <p className='mb-4'>К сожалению, нет описания на русском языке</p>
            )
          ) : movie?.overview ? (
            <p className='mb-4'>{movie.overview}</p>
          ) : (
            <p className='mb-4'>Sorry, no description available in English</p>
          )}

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
              Language: {movie?.original_language}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsContent;
