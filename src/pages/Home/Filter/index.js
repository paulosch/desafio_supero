import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

const Filter = ({ totalItems }) => (
  <Container>
    <div>
      <span>Filtrar ano de publicação:</span>
      <input type="number" min="200" max="2019" />
      <span>até </span>
      <input type="number" min="200" max="2019" />
    </div>

    <div>
      <strong>{`${totalItems} resultados encontrados`}</strong>
    </div>
  </Container>
);

Filter.propTypes = {
  totalItems: PropTypes.number.isRequired,
};

export default Filter;
