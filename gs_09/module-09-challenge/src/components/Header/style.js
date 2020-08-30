import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.header`
  height: 64px;
  padding: 10px 0;
  background: #ffffff;

  &,
  div:first-child {
    display: flex;
    justify-content: space-between;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  margin: 10px 0;
  border-right: solid #999 1px;
  cursor: pointer;

  img {
    width: 160px;
  }
`;

export const NavigationList = styled.ul`
  display: inline-flex;
  padding: 0 20px;
  align-items: center;
`;

export const NavItem = styled.li`
  margin: 0 10px;
  font-weight: bold;
  font-size: 12px;
  color: ${(props) => (props.selected ? '#333' : '#999')};

  &:hover {
    color: ${(props) => !props.selected && darken(0.2, '#999')};
  }

  a {
    color: inherit;
  }
`;

export const LoginControl = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  padding: 2px 30px;

  strong {
    color: #666;
  }

  button {
    background: transparent;
    border: 0;
    font-size: 14px;
    color: #de3b3b;
  }
`;
