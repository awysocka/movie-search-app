import PropTypes from 'prop-types';
import { timeConverter } from 'helpers/timeConverter';
import { getYear } from 'helpers/getYear';
import MovieRatingElement from 'components/MovieRatingElement/MovieRatingElement';
import {
  Section,
  InfoWrapper,
  Image,
  Title,
  BaseInfo,
  GenresInfo,
  Genre,
  TimeDataInfo,
  Overview,
  ProductionCountries,
  AdditionalInfo,
} from 'components/MovieDescription/MovieDescription.styles';

const MovieDescription = ({
  movieDescription: {
    poster_path: posterPath,
    title,
    overview,
    production_countries: productionCuntries,
    release_date: release,
    status,
    vote_average: rating,
    genres,
    runtime,
  },
}) => {
  const imgUrl = `https://image.tmdb.org/t/p/w500/${posterPath}`;
  const noPoster = '/nophoto.png';

  return (
    <Section>
      <Image
        src={`${posterPath === null || undefined ? noPoster : imgUrl}`}
        alt={title}
      />
      <InfoWrapper>
        <BaseInfo>
          <Title>{title}</Title>
          <MovieRatingElement rating={rating} />
          <TimeDataInfo>
            <span>{getYear(release)}</span>
            {runtime ? <span>{timeConverter(runtime)}</span> : ''}
          </TimeDataInfo>
          <GenresInfo>
            {genres?.map((genre) => (
              <Genre key={genre.id}>{genre.name} </Genre>
            ))}
          </GenresInfo>
          <Overview>{overview}</Overview>
        </BaseInfo>
        <AdditionalInfo>
          <span>status </span>
          <span>{status}</span>
          {release ? (
            <>
              <span>release date </span>
              <span>{release}</span>
            </>
          ) : (
            ''
          )}
          <span>production </span>
          <ProductionCountries>
            {productionCuntries?.map((country) => (
              <span key={country.name}>{country.iso_3166_1}</span>
            ))}
          </ProductionCountries>
        </AdditionalInfo>
      </InfoWrapper>
    </Section>
  );
};

MovieDescription.propTypes = {
  movieDescription: PropTypes.shape({
    posterPath: PropTypes.string,
    title: PropTypes.string,
    overview: PropTypes.string,
    roductionCuntries: PropTypes.array,
    release: PropTypes.string,
    status: PropTypes.string,
    rating: PropTypes.number,
    genres: PropTypes.array,
    runtime: PropTypes.number,
  }),
};

export default MovieDescription;
