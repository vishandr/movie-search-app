// pages/MovieDetails.tsx
import { useState, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import MovieDetailsContent from '../Components/MovieDetailsContent';

const MovieDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [language, setLanguage] = useState('en');
  const handleLanguageChange = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'ru' : 'en'));
  };

  if (!id) return <div>Error: No movie ID provided</div>;

  return (
    <Suspense fallback={<div>Loading movie details...</div>}>
      <MovieDetailsContent
        id={id}
        language={language}
        handleLanguageChange={handleLanguageChange}
      />
    </Suspense>
  );
};

export default MovieDetails;
