import React from 'react';
import PropTypes from 'prop-types';

import { Container, Content } from './styles';

export default function Detail({ children }) {
  return (
    <Container>
      <Content>{children}</Content>
    </Container>
  );
}

Detail.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};
