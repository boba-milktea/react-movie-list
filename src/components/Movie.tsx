import Footer from './Footer';
import Header from './Header';
import Input from './Input';
import MovieList from './MovieList';
import { useEffect, useState } from 'react';
import { fetchMovies } from '../api/api';

const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const getMovies = async () => {
      const movieData = await fetchMovies();
      setMovies(movieData?.data.results);
    };
    getMovies();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query.trim() === '') return;
    const movieData = await fetchMovies(query);
    setMovies(movieData?.data.results);

    setQuery('');
  };

  return (
    <>
      <Header />
      <main>
        <Input handleSubmit={handleSubmit} query={query} setQuery={setQuery} />
        <MovieList movies={movies} />
      </main>
      <Footer />
    </>
  );
};

export default Movie;
