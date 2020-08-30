import styled from 'styled-components/native';

import colors from '../../styles/colors';

export const Container = styled.View`
  height: 60px;
  padding: 12px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #141419;
`;

export const Logo = styled.Image`
  width: 180px;
`;

export const Cart = styled.TouchableOpacity`
  flex-direction: row;
  align-items: flex-start;
`;

export const CartAmount = styled.Text`
  position: absolute;
  text-align: center;
  top: -12px;
  right: -12px;
  min-width: 24px;
  min-height: 24px;
  background: ${colors.primary};
  padding: 4px;
  border-radius: 12px;
  border: 1px solid ${colors.dark};
  color: #fff;
`;
