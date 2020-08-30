import styled from 'styled-components';
import { Form as uForm } from '@rocketseat/unform';

export const Container = styled.div``;

export const Form = styled(uForm)`
  padding: 0 100px;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  > div {
    display: flex;
    justify-content: space-between;

    button {
      margin: 0 10px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  margin: 20px;
  padding: 20px;
  background: #fff;
  border-radius: 4px;

  div {
    margin: 10px auto;
  }
`;
