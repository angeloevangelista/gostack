import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const Container = styled.tr`
  background: #fff;
  color: #666666;

  td {
    vertical-align: middle;
    padding: 10px;

    &:first-child {
      padding-left: 20px;
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }

    &:nth-child(6) span {
      color: ${(props) => props.statusColor};
      display: inline-flex;
      align-items: center;
      font-weight: bold;
      background: ${(props) => lighten(0.35, props.statusColor)};
      text-align: center;
      padding: 5px 10px;
      border-radius: 20px;
      margin-right: 5px;

      &::before {
        margin-right: 8px;
        content: '';
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: ${(props) => props.statusColor};
      }
    }

    &:nth-child(${(props) => props.photoPosition}) span {
      display: inline-block;
      text-align: center;
      width: 32px;
      height: 32px;
      padding-top: 8px;
      border-radius: 50%;
      margin-right: 5px;
      color: ${(props) => props.initialsColor};
      background: ${(props) => lighten(0.35, props.initialsColor)};
    }

    &:last-child {
      position: relative;
      text-align: right;
      padding-right: 20px;
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
      color: #c6c6c6;

      > button {
        border: 0;
        background: none;

        > svg {
          cursor: pointer;
          width: 40px;
          height: 20px;
          border-radius: 20px;

          &:hover {
            background: ${lighten(0.1, '#c6c6c6')};
          }
        }
      }
    }
  }
`;

export const Actions = styled.div`
  z-index: 1;
  position: absolute;

  top: calc(100%);
  right: -18%;

  display: flex;
  flex-direction: column;
  text-align: left;

  padding: 10px;
  border-radius: 4px;

  background: #ffffff;
  box-shadow: 0 0 50px 10px rgba(0, 0, 0, 0.1);

  &::before {
    content: '';
    position: absolute;
    left: calc(50% - 10px);
    top: -15px;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 15px solid #ffffff;
  }

  hr {
    background: none;
    border-style: none;
    border-top: solid #00000020 1px;
  }

  button {
    width: 100%;
    display: flex;
    align-items: center;
    color: #999999;
    font-weight: bold;
    margin: 5px 0;
    padding: 0 10px;
    border-radius: 20px;
    border: 0;
    background: none;

    &:hover {
      background: ${darken(0.1, '#ffffff')};
    }

    svg {
      margin-right: 10px;
      width: 20px;
    }
  }
`;
