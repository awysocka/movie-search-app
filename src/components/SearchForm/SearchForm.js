import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { IoSearch } from 'react-icons/io5';
import { Form, Input, Button } from 'components/SearchForm/SearchForm.styles';

const SearchForm = ({ transparent }) => {
  const [searchValue, setSearchValue] = useState('');
  const history = useHistory();

  const handleChanges = (e) => {
    setSearchValue(e.target.value);
  };

  const clearSearchValue = () => {
    setSearchValue('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/search?q=${searchValue}&page=1`);
    clearSearchValue();
  };

  return (
    <Form onSubmit={handleSubmit} transparent={transparent}>
      <Input
        type="text"
        placeholder="Type a movie title"
        onChange={handleChanges}
        value={searchValue}
        transparent={transparent}
      />
      <Button transparent={transparent}>
        <IoSearch />
      </Button>
    </Form>
  );
};

export default SearchForm;
