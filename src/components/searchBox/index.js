import React from 'react';

import { Container, Content, Button } from './styles';
import search from '../../assets/images/search.png';

const SearchBox = () => (
  <Container>
    <Content>
      <img src={search} alt="Buscar" />
      <input type="text" placeholder="Busque livros pelo título, autor ou ISBN" />
    </Content>

    <Button type="button">Buscar</Button>
  </Container>
);

export default SearchBox;
