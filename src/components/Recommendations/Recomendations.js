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
      .get(`/.netlify/functions/recomendations/${id}`)
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
