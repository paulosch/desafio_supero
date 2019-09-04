import React from 'react';
import PropTypes from 'prop-types';

import logo from '../../assets/images/supero_cor.svg';
import SearchBox from '../searchBox';
import { Container, Logo, BookTitle } from './styles';

const Header = ({ title }) => (
  <Container>
    <div className="container">
      <div className="row">
        <div className="col-md-12 col-lg-4">
          <Logo src={logo} />
        </div>
        <div className="col-md-12 col-lg-8">
          {!title ? <SearchBox /> : <BookTitle>{title}</BookTitle>}
        </div>
      </div>
    </div>
  </Container>
);

Header.defaultProps = {
  title: '',
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
