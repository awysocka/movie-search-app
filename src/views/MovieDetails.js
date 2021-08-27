import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import MovieDescriptions from 'components/MovieDescription/MovieDescription';
import Recommendations from 'components/Recommendations/Recomendations';

const MovieDetails = () => {
  const [movieInfo, setMovieInfo] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`/.netlify/functions/details/${id}`)
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
      <Recommendations id={id} />
    </>
  );
};

export default MovieDetails;
