import styled from 'styled-components';

export const Container = styled.div`
  align-self: center;
  margin-bottom: 32px;

  label {
    cursor: pointer;

    &:hover {
      opacity: 0.75;
    }

    img,
    svg {
      width: 120px;
      height: 120px;
      padding: 30px;
      border-radius: 50%;
      border: 1px dashed #dddddd;
    }

    input {
      display: none;
    }
  }
`;
