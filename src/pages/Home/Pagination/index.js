import React from 'react';

import { Container, PageButton } from './styles';

const Pagination = () => (
  <Container>
    <PageButton>{'<<'}</PageButton>
    <PageButton>{'<'}</PageButton>
    <PageButton>1</PageButton>
    <PageButton>2</PageButton>
    <PageButton>...</PageButton>
    <PageButton>{'>'}</PageButton>
    <PageButton>{'>>'}</PageButton>
  </Container>
);

export default Pagination;
