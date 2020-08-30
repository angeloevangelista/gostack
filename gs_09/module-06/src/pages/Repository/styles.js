import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;

  ${(props) =>
    props.loading && {
      justifyContent: 'center',
      alignItems: 'center',
    }}
`;
