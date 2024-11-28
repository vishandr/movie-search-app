// pages/SearchPage.tsx
import { useState, Suspense } from 'react';
import { useSearchMovies } from '../api/fetchMovies';
import { usePopularMovies } from '../api/fetchPopularMovies';
import SearchPanel from '../Components/SearchPanel';
import MovieResults from '../Components/MovieResults';
import PopularMovies from '../Components/PopularMovies';

const LoadingFallback = () => (
  <div className='text-center'>Loading movies...</div>
);

const SearchPage = () => {
  const [query, setQuery] = useState('');
  const { data: moviesData } = useSearchMovies(query);

  const { data: popularMoviesData, isLoading: isPopularLoading } =
    usePopularMovies();

  return (
    <div className='min-h-screen bg-sky-100'>
      <div className='bg-sky-300'>
        <SearchPanel query={query} setQuery={setQuery} />
      </div>
      <Suspense fallback={<LoadingFallback />}>
        {query ? (
          moviesData && <MovieResults movies={moviesData.results} />
        ) : (
          <PopularMovies
            movies={popularMoviesData?.results || []}
            isLoading={isPopularLoading}
          />
        )}
      </Suspense>
    </div>
  );
};

export default SearchPage;
