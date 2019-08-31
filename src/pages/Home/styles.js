/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div`
  padding: 15px 30px;
`;

export const Centro = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
`;

export const Item = styled.li`
  width: 25%;
  border-radius: 3px;
  margin: 15px;
  background: #fff;

  &:nth-of-type(1n) {
    margin-left: 0px;
  }

  &:nth-of-type(4n) {
    margin-right: 0px;
  }

  a {
    display: flex;
    color: inherit;
  }
`;

export const Image = styled.img`
  border-radius: 3px 0 0 3px;
`;

export const Informations = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;

  span {
    margin-top: 8px;
    color: #797979;
  }
`;

export const Title = styled.strong`
  font-size: 16px;
`;
