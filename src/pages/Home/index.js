import React from 'react';
import { useSelector } from 'react-redux';

import DefaultLayout from '../_layouts/default';

import Header from '../../components/header';
import Filter from './Filter';
import Pagination from './Pagination';

import {
  Container, Centro, Item, Image, Informations, Title,
} from './styles';

import defaultBookImage from '../../assets/images/defaultBookImage.png';

const Home = () => {
  const {
    data, error, loading, totalItems,
  } = useSelector((state) => state.search);

  const renderList = () => {
    if (data) {
      return (
        <div>
          <ul className="row">
            {data.items.map((book) => (
              <Item key={book.id} className="col-md-4 col-12">
                <a href="/details">
                  <Image
                    src={
                      book.volumeInfo.imageLinks
                        ? book.volumeInfo.imageLinks.thumbnail
                        : defaultBookImage
                    }
                    Alt={book.volumeInfo.title}
                  />
                  <Informations>
                    <Title>{book.volumeInfo.title}</Title>
                    <small>
                      {`(${
                        book.volumeInfo.industryIdentifiers
                          ? book.volumeInfo.industryIdentifiers[0].identifier
                          : ''
                      })`}
                    </small>
                    <span>
                      {book.volumeInfo.authors ? `Autor: ${book.volumeInfo.authors[0]}` : ''}
                    </span>
                    <span>
                      {book.volumeInfo.publisher ? `Editora: ${book.volumeInfo.publisher}` : ''}
                    </span>
                    <span>
                      {book.volumeInfo.publishedDate
                        ? `Publicação: ${book.volumeInfo.publishedDate}`
                        : ''}
                    </span>
                  </Informations>
                </a>
              </Item>
            ))}
          </ul>

          <Pagination />
        </div>
      );
    }

    return (
      <Centro>
        <strong>Nenhum resultado encontrado</strong>
      </Centro>
    );
  };

  const renderContent = () => {
    if (loading) return <Centro>Carregando...</Centro>;

    if (error) {
      return (
        <Centro>
          <strong>Algo deu errado na sua pesquisa, tente novamente em aluns minutos</strong>
        </Centro>
      );
    }

    return renderList();
  };

  return (
    <DefaultLayout>
      <Header />
      <Container className="container">
        <Filter totalItems={totalItems} />

        {renderContent()}
      </Container>
    </DefaultLayout>
  );
};

export default Home;
