import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  /* background: linear-gradient(-90deg, #7159c1, #ab59c1); */
  background: #8275e6;
`;

export const Content = styled.div`
  max-width: 400px;
  display: flex;
  flex-direction: column;
  background: #fff;
  border: 0;
  border-radius: 4px;
  padding: 15px 30px;
  box-shadow: 0px 0px 100px 20px rgba(0, 0, 0, 0.2);

  img {
    width: 240px;
    margin: 15px auto;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 16px;

    strong {
      font-size: 12px;
      display: block;
      text-transform: uppercase;
      color: #333;
      margin: 12px 0 4px 0;
    }

    input {
      display: flex;
      align-items: center;
      height: 32px;
      padding: 0 8px;
      color: rgba(0, 0, 0, 0.75);
      border: solid rgba(0, 0, 0, 0.1) 1px;
      border-radius: 4px;

      &::placeholder {
        color: #999;
      }
    }

    span {
      margin: 2px 0 0 8px;
      color: #993322;
    }

    button {
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
      border: 0;
      border-radius: 4px;
      background: #7159c1;
      transition: 0.25s;
      margin: 15px 0 30px 0;

      &:hover {
        background: ${darken(0.2, '#7159c1')};
      }
    }
  }
`;
