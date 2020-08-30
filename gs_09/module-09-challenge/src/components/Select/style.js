import styled from 'styled-components';
import { Select } from '@rocketseat/unform';

export const Container = styled.div`
  width: 100%;

  strong {
    display: block;
    color: #444444;
    font-size: 16px;
    margin-bottom: 8px;
  }
`;

export const SelectStyled = styled(Select)`
  width: 100%;
  height: 40px;
  padding: 10px;
  border: solid #dddddd 1px;
  border-radius: 4px;
  background: #fff;
  font-size: 14px;
  color: #444444;

  &::placeholder {
    color: #666666;
  }

  option {
    font-size: 14px;
  }
`;
