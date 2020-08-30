import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  padding: 32px;
  background: #fff;
  border-radius: 4px;

  footer {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      background: #7159c1;
      color: #fff;
      border: 0;
      border-radius: 4px;
      padding: 12px 24px;
      font-weight: bold;
      text-transform: uppercase;
      transition: 0.2s;

      &:hover {
        background: ${darken(0.1, '#7159c1')};
      }
    }
  }
`;

export const ProductTable = styled.table`
  width: 100%;

  thead th {
    color: #999;
    padding: 12px;
    text-align: left;
  }

  tbody td {
    padding: 12px;
    border-bottom: 1px solid #eee;
  }

  img {
    height: 100px;
  }

  strong {
    color: #333;
    display: block;
  }

  span {
    display: block;
    margin-top: 4px;
    font-size: 16px;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;

    input {
      border: solid 1px #ddd;
      border-radius: 4px;
      color: #666;
      padding: 8px;
      width: 50px;
    }
  }

  button {
    background: none;
    border: 0;
    padding: 8px;
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: baseline;

  span {
    font-size: 12px;
    color: #999;
    font-weight: bold;
    text-transform: uppercase;
  }

  strong {
    font-size: 24px;
    margin-left: 4px;
  }
`;
