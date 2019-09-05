/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div``;

export const Centro = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
`;

export const Item = styled.li`
  a {
    display: flex;
    color: inherit;
    border-radius: 3px;
    margin: 15px 0;
    background: #fff;
    height: 200px;
  }
`;

export const Image = styled.div`
  width: 40%;
  height: 200px;
  border-radius: 3px 0 0 3px;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const Informations = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  padding: 5px;

  span {
    margin-top: 8px;
    color: #797979;
    font-size: 12px;
  }

  small {
    font-size: 10px;
  }
`;

export const Title = styled.strong`
  font-size: 16px;
`;
