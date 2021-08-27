import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import axios from 'axios';
import styled from 'styled-components';
import SearchItem from 'components/SearchItem/SearchItem';
import Pagination from 'components/Pagination/Pagination';

const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 50px;

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
  const [totalPages, setTotalPages] = useState(0);
  const { search } = useLocation();

  const queryValues = queryString.parse(search);
  let searchValue = queryValues.q;
  let currentPage = Number(queryValues.page);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`/.netlify/functions/search?page=${currentPage}&q=${searchValue}`)
      .then((response) => {
        setMoviesList(response.data.results);
        setTotalPages(response.data.total_pages);
      })
      .then(() => setIsLoading(false));
  }, [searchValue, currentPage]);

  return (
    <Wrapper>
      <h1>Search results for: {searchValue}</h1>
      {isLoading ? (
        <p>is loading...</p>
      ) : (
        <div>
          <MoviesList>
            {moviesList.length === 0 ? (
              <li>No movies were found.</li>
            ) : (
              moviesList?.map((movie, id) => (
                <SearchItem key={id} movieDescription={movie} />
              ))
            )}
          </MoviesList>
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            searchValue={searchValue}
          />
        </div>
      )}
    </Wrapper>
  );
};

export default SearchResults;
