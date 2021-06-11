import PropTypes from 'prop-types';

import { MovieRating } from 'components/MovieRatingElement/MovieRatingElement.styles';

const MovieRatingElement = ({ rating }) => {
  return <MovieRating>{rating}</MovieRating>;
};

MovieRatingElement.propTypes = {
  rating: PropTypes.number,
};

export default MovieRatingElement;
