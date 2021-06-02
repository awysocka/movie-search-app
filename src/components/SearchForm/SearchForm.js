import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  width: 100%;
  max-width: 820px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 60px;

  ${({ theme }) => theme.breakpoints.tablet} {
    flex-direction: row;
  }
`;

const Input = styled.input`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({ theme }) => theme.colors.white};
  border-radius: 50px;
  font-family: 'Roboto', sans-serif;
  font-size: 2.4rem;
  font-weight: 300;
  padding: 15px 20px;
  margin-bottom: 20px;

  ::placeholder {
    color: ${({ theme }) => theme.colors.grey};
  }

  ${({ theme }) => theme.breakpoints.tablet} {
    border-radius: 50px 0 0 50px;
    padding: 10px 20px;
    margin-bottom: 0;
  }
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.lightpurple};
  border: 2px solid ${({ theme }) => theme.colors.lightpurple};
  border-radius: 50px;
  font-family: 'Roboto', sans-serif;
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: center;
  padding: 10px 50px;

  ${({ theme }) => theme.breakpoints.tablet} {
    border-radius: 0 50px 50px 0;
  }
`;

const SearchForm = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleChanges = (e) => {
    setSearchValue(e.target.value);
  };

  const clearSearchValue = () => {
    setSearchValue('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Next page with search value=${searchValue}`);
    clearSearchValue();
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Type a movie title"
        onChange={handleChanges}
        value={searchValue}
      />
      <Button>search</Button>
    </Form>
  );
};

export default SearchForm;
