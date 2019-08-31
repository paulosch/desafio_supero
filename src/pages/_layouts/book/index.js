import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';

const BookLayout = ({ children }) => <Wrapper>{children}</Wrapper>;

BookLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default BookLayout;
