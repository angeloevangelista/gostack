import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
`;

export const Table = styled.table`
  width: 100%;
  background: transparent;
  border-spacing: 0 20px;

  thead th {
    text-align: left;
    padding: 0 10px;
    color: #444444;
    font-size: 14px;

    &:last-child {
      text-align: right;
    }
  }
`;
