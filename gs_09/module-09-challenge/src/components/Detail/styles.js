import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  z-index: 1;

  display: flex;
  justify-content: center;
  align-items: center;

  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background: rgba(0, 0, 0, 0.75);
`;

export const Content = styled.div`
  width: 100%;
  max-width: 500px;
  background: #ffffff;
  padding: 20px;
  border-radius: 4px;

  button {
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2px;
    float: right;
    border: 0;
    background: none;

    svg {
      width: 24px;
      color: #444444;
      transition: 0.25s;

      &:hover {
        opacity: 0.5;
      }
    }
  }

  hr {
    margin: 10px 0;
    background: none;
    border-style: none;
    border-top: solid #00000020 1px;
  }

  section {
    h3 {
      color: #444444;
      margin-bottom: 10px;
    }

    span,
    p {
      display: block;
      color: #666666;
      margin: 4px 0;
      font-size: 14px;
      line-height: 20px;
    }

    &:last-child {
      img,
      svg {
        display: block;
        width: 300px;
        height: 60px;
        margin: 20px auto;
      }
    }
  }
`;
