import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  svg {
    color: #999999;
    position: absolute;
    left: 14px;
    width: 16px;
  }
`;

export const Input = styled.input`
  font-size: 14px;
  padding: 0 20px 0 40px;
  width: 260px;
  height: 36px;
  color: #666666;
  border: solid #dddddd 1px;
  border-radius: 4px;

  &::placeholder {
    color: #999999;
  }
`;
