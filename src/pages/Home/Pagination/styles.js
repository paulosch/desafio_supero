import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 0;
`;

export const PageButton = styled.button`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 2px;
  border: none;
  background: ${(props) => (props.active ? '#1218a9' : '#fff')};
  color: ${(props) => (props.active ? '#fff' : '#1218a9')};
`;
