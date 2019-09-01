import React from 'react';
import PropTypes from 'prop-types';

import Close from '../../assets/images/close.svg';

import Header from '../../components/header';
import BookLayout from '../_layouts/book';
import {
  Container,
  CloseButton,
  Informations,
  Author,
  Title,
  Publisher,
  BuyButton,
  Description,
} from './styles';

const Details = ({ location }) => {
  const { book } = location;

  return (
    <BookLayout>
      <Header title={book.volumeInfo.title} />

      <Container className="container">
        <div className="row">
          {book.volumeInfo.imageLinks.thumbnail ? (
            <div className="col-md-4 col-12">
              <img alt="title" src={book.volumeInfo.imageLinks.thumbnail} />
            </div>
          ) : (
            ''
          )}

          <Informations
            className={`${book.volumeInfo.imageLinks.thumbnail ? 'col-md-8' : ''} col-12`}
          >
            <Title>{book.volumeInfo.title}</Title>
            <Author>{book.volumeInfo.authors ? book.volumeInfo.authors[0] : ''}</Author>
            <Publisher>{book.volumeInfo.publisher}</Publisher>

            {book.saleInfo.buyLink ? (
              <BuyButton target="_blank" href={book.saleInfo.buyLink}>
                Comprar
              </BuyButton>
            ) : (
              ''
            )}
          </Informations>
        </div>

        <div className="row">
          <div className="col-12">
            <Description>{book.volumeInfo.description}</Description>
          </div>
        </div>

        <CloseButton to="/">
          <img src={Close} alt="Close" />
        </CloseButton>
      </Container>
    </BookLayout>
  );
};

Details.propTypes = {
  location: PropTypes.shape({
    book: PropTypes.shape().isRequired,
  }).isRequired,
};

export default Details;
