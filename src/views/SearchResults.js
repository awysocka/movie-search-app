import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import axios from 'axios';
import styled from 'styled-components';
import SearchItem from 'components/SearchItem/SearchItem';

const Wrapper = styled.div`
  width: 100%;
  flex-grow: 1;

  h1 {
    font-size: 2.4rem;
    margin-bottom: 30px;
    text-align: start;
  }
`;

const MoviesList = styled.ul`
  width: 100%;
  display: grid;
  grid-gap: 30px;
  justify-content: space-between;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
`;

const SearchResults = () => {
  const [moviesList, setMoviesList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { search } = useLocation();

  const queryValues = queryString.parse(search);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=a6588dff4f0d571a26d4e1cf68e2a5f2&language=en-US&page=1&include_adult=false&query=${queryValues.q}`
      )
      .then((response) => setMoviesList(response.data.results))
      .then(() => setIsLoading(false));
  }, [queryValues.q]);

  return (
    <Wrapper>
      <h1>Search results:</h1>
      {isLoading ? (
        <p>is loading...</p>
      ) : (
        <MoviesList>
          {moviesList.length === 0 ? (
            <li>No movies were found.</li>
          ) : (
            moviesList?.map((movie, id) => (
              <SearchItem key={id} movieDescription={movie} />
            ))
          )}
        </MoviesList>
      )}
    </Wrapper>
  );
};

export default SearchResults;
