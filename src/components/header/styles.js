/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div`
  background: rgba(100%, 100%, 100%, 20%);

  .row {
    align-items: center;
    padding: 30px 0;

    @media (max-width: 992px) {
      justify-content: center;

      div {
        text-align: center;
      }

      img {
        margin-bottom: 10px;
      }
    }
  }
`;

export const Logo = styled.img`
  width: 250px;
  margin-right: 15px;
`;

export const BookTitle = styled.h2`
  font-size: 32px;
  font-weight: bolder;
  color: white;
  width: 100%;
  text-align: center;
`;
