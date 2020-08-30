import React from 'react';
import PropTypes from 'prop-types';

import { Container, Table } from './styles';

export default function Grid({ children }) {
  return (
    <Container>
      <Table>{children}</Table>
    </Container>
  );
}

Grid.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};
