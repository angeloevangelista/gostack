import React from 'react';
import PropTypes from 'prop-types';

import { Container, SelectStyled } from './style';

export default function Select({ label, name, placeholder, ...rest }) {
  return (
    <Container {...rest}>
      <strong>{label}</strong>
      <SelectStyled {...rest} placeholder={placeholder} name={name} />
    </Container>
  );
}

Select.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};

Select.defaultProps = {
  placeholder: '',
};
