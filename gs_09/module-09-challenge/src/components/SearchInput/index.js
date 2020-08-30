import React from 'react';
import { GoSearch } from 'react-icons/go';
import PropTypes from 'prop-types';

import { Container, Input } from './style';

export default function SearchInput({ searchFor }) {
  const placeholder = searchFor ? `Buscar por ${searchFor}` : '';

  return (
    <Container>
      <Input placeholder={placeholder} type="text" />
      <GoSearch size={32} />
    </Container>
  );
}

SearchInput.propTypes = {
  searchFor: PropTypes.string,
};

SearchInput.defaultProps = {
  searchFor: '',
};
