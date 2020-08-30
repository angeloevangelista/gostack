import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;
  padding: 0 12px;

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

    hr {
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.2);
      margin: 10px 0 20px;
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
  }

  > button {
    width: 100%;
    border: 0;
    height: 40px;
    margin: 12px 0 0;
    background: #f64c75;
    font-weight: bold;
    color: #fff;
    border-radius: 4px;
    font-size: 16px;
    transition: 0.25s;

    &:hover {
      background: ${darken(0.1, '#f64c75')};
    }
  }
`;
