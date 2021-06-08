import {
  MovieItem,
  MoviePosterContainer,
  MoviePoster,
  MovieRating,
  Title,
} from 'components/SearchItem/SearchItem.styles';

const SearchItem = ({
  movieDescription: {
    poster_path: posterPath,
    vote_average: rating,
    original_title: title,
  },
}) => {
  const imgUrl = `https://image.tmdb.org/t/p/w500/${posterPath}`;
  const noPoster = 'nophoto.png';

  return (
    <MovieItem>
      <MoviePosterContainer>
        <a href="/">
          <MoviePoster
            src={`${posterPath === null ? noPoster : imgUrl}`}
            alt={title}
          ></MoviePoster>
        </a>
        <MovieRating>{rating}</MovieRating>
      </MoviePosterContainer>
      <Title>{title}</Title>
    </MovieItem>
  );
};

export default SearchItem;
