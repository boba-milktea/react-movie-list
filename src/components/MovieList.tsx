import type { MovieProp } from '../types/movieTypes';
import notFound from '../assets/cannot-find.png';
import noImage from '../assets/no-image.png';
import ReadMore from './ReadMore';

const MovieList = ({ movies }: MovieProp) => {
  if (movies.length === 0) {
    return (
      <div className="p-2 m-4 h-xl flex items-center justify-center">
        <img className="w-3xs" src={notFound} alt="a surprised cute buddy" />
        <h2 className="p-4 rounded-2xl bg-bubblegum-pink font-bold font-graphite-gray text-center">
          ...Oops! No movie found, please try another word.
        </h2>
      </div>
    );
  }
  return (
    <ul
      aria-live="polite"
      className="grid w-full my-4 mx-auto p-4 border-2 rounded-4xl shadow-2xl shadow-graphite-gray bg-mint-candy border-graphite-gray lg:w-5/6 md:grid-cols-2 lg:grid-cols-3 gap-2"
    >
      <h2 className="sr-only">Movie Search Result</h2>
      {movies.map((movie) => (
        <li key={movie?.id} className="p-2 list-none">
          <img
            src={
              movie?.backdrop_path
                ? `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`
                : noImage
            }
            alt={`Image for ${movie?.title}`}
            className="rounded-2xl shadow-2xl"
          />

          <h2 className="font-bold text-2xl py-2">{movie?.title}</h2>
          <p className="mb-2">
            <span className="font-bold">Rating:</span>{' '}
            {Math.round(movie?.vote_average * 100) / 100}
          </p>
          <ReadMore
            title={movie.title}
            overview={movie.overview}
            numOfWords={36}
          />
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
