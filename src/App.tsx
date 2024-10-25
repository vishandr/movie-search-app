import React, { useState } from 'react';
import { searchMovies } from './api/movies';
import { MovieCard, Movie } from './Components/MovieCard';
import SearchPanel from './Components/SearchPanel.tsx';

function App() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState<Movie[]>([]);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query) return;
    const data = await searchMovies(query);
    setMovies(data.results || []);
  };

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
        {movies.map((movie: Movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default App;
