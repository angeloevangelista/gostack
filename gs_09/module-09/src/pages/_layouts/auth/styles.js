import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: linear-gradient(-90deg, #7159c1, #ab59c1);
`;

export const Content = styled.div`
  width: 100%;
  max-width: 320px;
  text-align: center;

  form {
    display: flex;
    flex: 1;
    flex-direction: column;
    margin-top: 32px;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      padding: 0 16px;
      height: 40px;
      margin: 0 0 10px;
      border-radius: 4px;
      color: #fff;

      &::placeholder {
        color: rgba(255, 255, 255, 0.75);
      }
    }

    span {
      color: #fb6f90;
      align-self: flex-start;
      margin: 0 16px 8px;
      font-weight: bold;
    }

    button {
      border: 0;
      height: 40px;
      margin: 8px 0 0;
      background: #3b9eff;
      font-weight: bold;
      color: #fff;
      border-radius: 4px;
      font-size: 16px;
      transition: 0.25s;

      &:hover {
        background: ${darken(0.05, '#3b9eff')};
      }
    }

    a {
      color: #fff;
      margin-top: 16px;
      font-size: 16px;
      opacity: 0.75;

      &:hover {
        opacity: 1;
      }
    }
  }
`;
