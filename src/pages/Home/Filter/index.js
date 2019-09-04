import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Dropdown from 'react-dropdown';

import { alterType } from '../../../store/modules/search/actions';

import { Container } from './styles';
import options from './options';

const Filter = ({ totalItems }) => {
  const dispatch = useDispatch();
  const { type } = useSelector((state) => state.search);

  const handleType = (obj) => {
    dispatch(alterType(obj));
  };

  return (
    <Container className="container">
      <div className="row">
        <div className="col-md-8 col-12">
          <span>Filtrar por tipo:</span>
          <Dropdown
            options={options}
            onChange={handleType}
            value={type}
            placeholder="Selecione um tipo"
          />
        </div>
        <div className="col-md-4 col-12 right">
          <strong>{`${totalItems} resultados encontrados`}</strong>
        </div>
      </div>
    </Container>
  );
};

Filter.propTypes = {
  totalItems: PropTypes.number.isRequired,
};

export default Filter;
