import axios from 'axios';

export const fetchMovies = async (query = '') => {
  const url = !query
    ? `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&page=1`
    : `https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_API_KEY}&query=${query}`;

  try {
    const res = await axios.get(url);
    if (res.status !== 200) {
      throw new Error(`The data can't be fetched - Status: ${res.status} `);
    } else {
      return res;
    }
  } catch (err) {
    console.error(err);
  }
};
