import PropTypes from 'prop-types';

import { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Section,
  RecommendetMovies,
  Title,
} from 'components/Recommendations/Recomendations.styles';

import SearchItem from 'components/SearchItem/SearchItem';

const Recommendations = ({ id }) => {
  const [recommendetMovies, setRecommendetMovies] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=a6588dff4f0d571a26d4e1cf68e2a5f2&language=en-US&page=1`
      )
      .then((response) => setRecommendetMovies(response.data.results));
  }, [id]);

  return (
    <>
      {recommendetMovies.length > 0 && (
        <Section>
          <Title>Recommendations:</Title>
          <RecommendetMovies>
            {recommendetMovies?.slice(0, 5).map((movie) => (
              <SearchItem key={movie.id} movieDescription={movie} />
            ))}
          </RecommendetMovies>
        </Section>
      )}
    </>
  );
};

Recommendations.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Recommendations;
