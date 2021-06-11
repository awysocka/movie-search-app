import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import MovieRatingElement from 'components/MovieRatingElement/MovieRatingElement';
import { getRating } from 'helpers/getRating';
import {
  MovieItem,
  MoviePosterContainer,
  MoviePoster,
  Title,
} from 'components/SearchItem/SearchItem.styles';

const SearchItem = ({
  movieDescription: {
    id,
    poster_path: posterPath,
    vote_average: rating,
    title,
  },
}) => {
  const imgUrl = `https://image.tmdb.org/t/p/w500/${posterPath}`;
  const noPoster = '/nophoto.png';

  return (
    <MovieItem>
      <MoviePosterContainer>
        <Link to={`/search/${id}/${title}`}>
          <MoviePoster
            src={`${posterPath === null ? noPoster : imgUrl}`}
            alt={title}
          ></MoviePoster>
        </Link>
        <MovieRatingElement rating={getRating(rating)} />
      </MoviePosterContainer>
      <Link to={`/search/${id}/${title}`}>
        <Title>{title}</Title>
      </Link>
    </MovieItem>
  );
};

SearchItem.propTypes = {
  movieDescription: PropTypes.shape({
    id: PropTypes.number.isRequired,
    posterPath: PropTypes.string,
    rating: PropTypes.number,
    title: PropTypes.string,
  }),
};

export default SearchItem;
