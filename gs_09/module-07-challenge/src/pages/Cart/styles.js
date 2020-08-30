import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';
import { darken } from 'polished';
import colors from '../../styles/colors';

export const Container = styled.View`
  padding: 12px 24px;
  align-items: center;
  flex: 1;
  background: ${colors.dark};
`;

export const CartView = styled.View`
  width: 100%;
  background: #fff;
  padding: 12px;
  border-radius: 8px;
  margin-top: 20px;
  max-width: 700px;
`;

export const CartList = styled.ScrollView``;

export const CartItem = styled.View`
  width: 100%;
  flex-direction: column;
  align-items: center;
  margin-bottom: 16px;
`;

export const Product = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin: 16px 0;
`;

export const ProductImage = styled.Image`
  width: 120px;
  height: 120px;
`;

export const ProductInfo = styled.View`
  justify-content: space-between;
  margin-left: 8px;
  flex: 1;
`;

export const TrashButton = styled.TouchableOpacity`
  margin: 0 16px;
`;

export const ProductName = styled.Text`
  font-size: 20px;
  text-align: left;
  margin-bottom: 16px;
`;

export const ProductPrice = styled.Text`
  font-size: 24px;
  text-align: left;
  font-weight: bold;
`;

export const SubTotalContainer = styled.View`
  width: 100%;
  padding: 8px 12px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
  background: #eeeeee;
`;

export const Amount = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const AmountText = styled.Text`
  padding: 4px 16px;
  margin: 4px 8px;
  font-size: 16px;
  text-align: center;
  background: #fff;
  border: ${darken(0.1, '#f2f2f2')} 1px;
  border-radius: 4px;
`;

export const SubTotal = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;

export const TotalContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin: 24px 0;
`;

export const TotalText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  text-transform: uppercase;
  color: #999999;
`;

export const Total = styled.Text`
  font-size: 40px;
  font-weight: bold;
  margin: 6px 0;
`;
export const FinishButtom = styled(RectButton)`
  background: ${colors.primary};
  width: 100%;
  align-items: center;
  padding: 12px;
  border-radius: 4px;
  margin-bottom: 24px;
`;

export const FinishButtomText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  text-transform: uppercase;
  color: #fff;
`;

export const EmptyCartContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin: 16px 0;
`;

export const EmptCartAdvice = styled.Text`
  margin-top: 16px;
  font-size: 24px;
  font-weight: bold;
`;
