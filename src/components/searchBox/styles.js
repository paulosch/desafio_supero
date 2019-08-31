import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: white;
  border-radius: 3px;
  padding: 10px;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  img {
    margin-right: 5px;
    width: 25px;
  }

  input {
    width: 100%;
    margin-right: 5px;
    padding: 5px;
    border: none;
  }
`;

export const Button = styled.button`
  text-transform: uppercase;
  background-color: #1841c9;
  border: none;
  color: white;
  padding: 8px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;

  &:active {
    background-color: #1887c9;
  }
`;
