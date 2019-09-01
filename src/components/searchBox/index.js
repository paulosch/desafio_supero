import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { searchRequest } from '../../store/modules/search/actions';

import { Container, Content, Button } from './styles';
import search from '../../assets/images/search.png';

const SearchBox = () => {
  const [textSearch, handleChange] = useState('');
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(searchRequest(textSearch, 1));
  };

  const handleKeyUp = (e) => {
    if (e.key === 'Enter') {
      dispatch(searchRequest(textSearch, 1));
    }
  };

  return (
    <Container>
      <Content>
        <img src={search} alt="Buscar" />
        <input
          type="text"
          value={textSearch}
          placeholder="Busque livros pelo título, autor ou ISBN"
          onChange={(e) => handleChange(e.target.value)}
          onKeyUp={(e) => handleKeyUp(e)}
        />
      </Content>

      <Button type="button" onClick={() => handleSearch(textSearch)}>
        Buscar
      </Button>
    </Container>
  );
};

export default SearchBox;
