import styled from 'styled-components';
import { darken } from 'polished';

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 24px;
  list-style: none;
  justify-content: center;

  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 4px;
    padding: 24px;

    img {
      align-self: center;
      max-width: 230px;
    }

    > strong {
      font-size: 16px;
      line-height: 20px;
      color: #333;
    }

    > span {
      font-size: 24px;
      font-weight: bold;
      margin: 4px 0 16px;
    }

    > button {
      background: #7159c1;
      color: #fff;
      border: 0;
      border-radius: 4px;
      margin-top: auto;

      display: flex;
      align-items: center;
      transition: 0.2s;

      &:hover {
        background: ${darken(0.1, '#7159c1')};
      }

      div {
        display: flex;
        align-items: center;
        padding: 12px;
        background: rgba(0, 0, 0, 0.1);

        svg {
          margin-right: 4px;
        }
      }

      span {
        flex: 1;
        text-align: center;
        font-weight: bold;
      }
    }
  }
`;

export const ProductItem = styled.ul``;
