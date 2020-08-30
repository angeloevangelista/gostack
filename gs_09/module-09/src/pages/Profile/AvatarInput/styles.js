import styled from 'styled-components';

export const Container = styled.div`
  align-self: center;
  margin-bottom: 32px;

  label {
    cursor: pointer;

    &:hover {
      opacity: 0.75;
    }

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      border: 4px solid rgba(255, 255, 255, 0.2);
      background: #eee;
    }

    input {
      display: none;
    }
  }
`;
