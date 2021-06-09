import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import MovieDescriptions from 'components/MovieDescription/MovieDescription';

const MovieDetails = () => {
  const [movieInfo, setMovieInfo] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=a6588dff4f0d571a26d4e1cf68e2a5f2&language=en-US`
      )
      .then((response) => setMovieInfo(response.data))
      .then(() => setIsLoading(false));
  }, [id]);

  return (
    <>
      {isLoading ? (
        <p>is loading...</p>
      ) : (
        <MovieDescriptions movieDescription={movieInfo} />
      )}
    </>
  );
};

export default MovieDetails;