import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  color: #fff;
  font-weight: bold;

  width: 120px;
  height: 36px;

  background: ${(props) => props.color};
  border: 0;
  border-radius: 4px;
  transition: 0.25s;

  &:hover {
    background: ${(props) => darken(0.2, props.color)};
  }

  svg {
    margin-right: 10px;
    width: 24px;
    height: 24px;
  }
`;
