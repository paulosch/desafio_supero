import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  position: relative;
  margin: 30px 0;
  padding: 15px 0;
  background: #fff;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
`;

export const CloseButton = styled(Link)`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 20px;
`;

export const Informations = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  font-size: 32px;
  margin-top: 15px;
`;

export const Author = styled.h2`
  font-size: 16px;
  font-weight: bolder;
  color: #1218a9;
`;

export const Publisher = styled.small`
  color: #6d6d6f;
`;

export const BuyButton = styled.a`
  border-radius: 3px;
  color: #fff;
  background: #1218a9;
  padding: 10px 25px;
  width: 120px;
  margin-top: 15px;
`;

export const Description = styled.p`
  margin: 15px;
  font-size: 12px;
  color: #6d6d6f;
`;
