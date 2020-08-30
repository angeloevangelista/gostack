import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './style';

export default function GridHeader({ children }) {
  return <Container>{children}</Container>;
}

GridHeader.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};
