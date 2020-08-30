import React from 'react';
import PropTypes from 'prop-types';
// import { FiPlus } from 'react-icons/fi';

import { Container } from './style';

export default function Button({ children, type, color }) {
  return (
    <Container color={color} type={type}>
      {/* <FiPlus size={32} /> */}
      {children}
    </Container>
  );
}

Button.propTypes = {
  children: PropTypes.element.isRequired,
  type: PropTypes.string,
  color: PropTypes.string,
};

Button.defaultProps = {
  type: 'button',
  color: '#7159c1',
};
