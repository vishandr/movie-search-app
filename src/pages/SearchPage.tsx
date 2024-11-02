// pages/SearchPage.tsx
import React, { useState } from 'react';
import { useSearchMovies } from '../api/movies';
import { MovieCard, Movie } from '../Components/MovieCard';
import SearchPanel from '../Components/SearchPanel';

const SearchPage = () => {
  const [query, setQuery] = useState('');
  const {
    data: moviesData,
    isLoading,
    error,
    refetch,
  } = useSearchMovies(query);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    refetch();
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading movies</div>;

  return (
    <div className='min-h-screen bg-sky-100'>
      <div className='bg-sky-300'>
        <SearchPanel
          query={query}
          setQuery={setQuery}
          onSearch={handleSearch}
        />
      </div>
      <div className='p-8 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {moviesData?.results.map((movie: Movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
