import React from 'react';
import PropTypes from 'prop-types';

import getStatusColor from '~/utils/getStatusColor';

import { Container } from './styles';

export default function Line({ children, status, color, photoPosition }) {
  return (
    <Container
      photoPosition={photoPosition}
      initialsColor={color}
      statusColor={getStatusColor(status)}
    >
      {children}
    </Container>
  );
}

Line.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  status: PropTypes.number,
  color: PropTypes.string,
  photoPosition: PropTypes.number,
};

Line.defaultProps = {
  status: 0,
  color: '#7159c1',
  photoPosition: -1,
};
