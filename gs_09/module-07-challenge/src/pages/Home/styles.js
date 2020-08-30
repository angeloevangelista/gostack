import styled from 'styled-components/native';
import { darken } from 'polished';

import { RectButton, FlatList } from 'react-native-gesture-handler';
import colors from '../../styles/colors';

export const Container = styled.View`
  padding: 0 24px;
  align-items: center;
  flex: 1;
  background: ${colors.dark};
`;

export const ProductList = styled(FlatList)`
  width: 100%;
`;

export const ProductItem = styled.View`
  width: 100%;
  max-width: 500px;
  align-items: center;
  background: #fff;
  padding: 12px;
  border-radius: 8px;
  justify-content: center;
  margin-top: 20px;
`;

export const ProductInfo = styled.View`
  width: 100%;
`;

export const ProductImage = styled.Image`
  width: 180px;
  height: 180px;
`;

export const ProductTitle = styled.Text`
  font-size: 20px;
  text-align: left;
  color: #333;
`;

export const ProductPrice = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin: 8px 0;
`;

export const AddButton = styled(RectButton)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 42px;
  margin-top: 12px;
  border-radius: 4px;
  background: ${colors.primary};
`;

export const ProductAmount = styled.View`
  flex-direction: row;
  height: 100%;
  width: 72px;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  background: ${darken(0.1, colors.primary)};
`;

export const ProductAmountText = styled.Text`
  font-size: 16px;
  margin-left: 12px;
  color: #fff;
`;

export const AddButtonText = styled.Text`
  font-size: 20px;
  color: #fff;
  margin-right: 32px;
  text-transform: uppercase;
`;
