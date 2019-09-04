import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { searchRequest } from '../../store/modules/search/actions';

import { Container, Content, Button } from './styles';
import search from '../../assets/images/search.png';

const SearchBox = () => {
  const dispatch = useDispatch();
  const [textSearch, handleChange] = useState('');

  const request = () => dispatch(searchRequest(textSearch, 1));

  const handleSearch = () => {
    request();
  };

  const handleKeyUp = (e) => {
    if (e.key === 'Enter') {
      request();
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
