import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 48px 0;

  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    a + a {
      margin-top: 24px;
    }
  }
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.5;
  }

  div {
    text-align: right;
    margin-right: 12px;

    strong {
      display: block;
      color: #fff;
    }

    span {
      font-size: 12px;
      color: #999;
    }
  }
`;
