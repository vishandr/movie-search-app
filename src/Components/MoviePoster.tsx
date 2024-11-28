interface MoviePosterProps {
  posterPath: string | null;
  title: string;
}

const MoviePoster: React.FC<MoviePosterProps> = ({ posterPath, title }) => {
  if (!posterPath) {
    return <div className='text-center text-gray-500'>No Image Available</div>;
  }

  return (
    <img
      src={`https://image.tmdb.org/t/p/w500${posterPath}`}
      alt={title}
      className='w-full h-auto'
    />
  );
};

export default MoviePoster;
