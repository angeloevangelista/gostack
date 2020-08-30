import React from 'react';
import PropTypes from 'prop-types';

import { Container, InputStyled } from './style';

export default function Input({ label, type, name, placeholder, ...rest }) {
  return (
    <Container {...rest} type={type}>
      <strong>{label}</strong>
      <InputStyled
        {...rest}
        placeholder={placeholder}
        name={name}
        type={type}
      />
    </Container>
  );
}

Input.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  type: 'text',
  placeholder: '',
};
