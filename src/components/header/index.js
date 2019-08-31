import React from 'react';
import PropTypes from 'prop-types';

import logo from '../../assets/images/supero_cor.svg';
import SearchBox from '../searchBox';
import { Container, Logo, BookTitle } from './styles';

const Header = ({ title }) => (
  <Container>
    <Logo src={logo} />
    {!title ? <SearchBox /> : <BookTitle>{title}</BookTitle>}
  </Container>
);

Header.defaultProps = {
  title: '',
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
