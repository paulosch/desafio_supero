/* eslint-disable no-plusplus */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { searchRequest } from '../../../store/modules/search/actions';

import { Container, PageButton } from './styles';

const Pagination = () => {
  const dispatch = useDispatch();
  const {
    textSearch, itemsPerPage, page, totalItems,
  } = useSelector((state) => state.search);

  const total = Math.ceil(totalItems / itemsPerPage);

  const pageNumbers = [];
  for (let i = 1; i <= total; i++) {
    pageNumbers.push(i);
  }

  const setPage = (pageNumber) => {
    dispatch(searchRequest(textSearch, pageNumber));
  };

  return (
    <Container>
      <PageButton onClick={() => setPage(1)}>{'<<'}</PageButton>

      {pageNumbers.map((number) => {
        if (
          number === 1
          || number === 2
          || number === total - 1
          || number === total
          || (number >= page - 3 && number <= page + 3)
        ) {
          return (
            <PageButton active={number === page} onClick={() => setPage(number)}>
              {(number === total - 1 && number - 1 > page + 3)
              || (number === 2 && number + 1 < page - 3)
                ? '...'
                : number}
            </PageButton>
          );
        }
      })}

      <PageButton onClick={() => setPage(total)}>{'>>'}</PageButton>
    </Container>
  );
};

export default Pagination;
