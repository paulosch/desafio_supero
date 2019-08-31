import React from 'react';

import DefaultLayout from '../_layouts/default';

import Header from '../../components/header';
import Filter from './Filter';
import Pagination from './Pagination';

import {
  Container, Centro, Item, Image, Informations, Title,
} from './styles';

const Home = () => {
  const data = {
    kind: 'books#volumes',
    totalItems: 348,
    items: [
      {
        id: 'FfX-AgAA123123QBAJ',
        volumeInfo: {
          title: 'Admirável mundo novo',
          publishedDate: '2014-03-06',
          authors: ['Aldous Huxley'],
          industryIdentifiers: [
            {
              type: 'ISBN_13',
              identifier: '9788525056443',
            },
          ],
          publisher: 'Globo Livros',
          imageLinks: {
            thumbnail:
              'http://books.google.com/books/content?id=FfX-AgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          },
        },
      },
    ],
  };

  return (
    <DefaultLayout>
      <Header />
      <Container>
        <Filter totalItems={data ? data.totalItems : 0} />

        {data ? (
          <>
            <ul>
              {data.items.map((book) => (
                <Item key={book.id}>
                  <a href="/details">
                    <Image src={book.volumeInfo.imageLinks.thumbnail} Alt={book.volumeInfo.title} />
                    <Informations>
                      <Title>{book.volumeInfo.title}</Title>
                      <small>{`(${book.volumeInfo.industryIdentifiers[0].identifier})`}</small>
                      <span>
                        Autor:
                        <br />
                        {book.volumeInfo.authors[0]}
                      </span>
                      <span>
                        Editora:
                        <br />
                        {book.volumeInfo.publisher}
                      </span>
                      <span>
                        Publicação
                        <br />
                        {book.volumeInfo.publishedDate}
                      </span>
                    </Informations>
                  </a>
                </Item>
              ))}
            </ul>

            <Pagination />
          </>
        ) : (
          <Centro>
            <strong>Nenhum resultado encontrado</strong>
          </Centro>
        )}
      </Container>
    </DefaultLayout>
  );
};

export default Home;
