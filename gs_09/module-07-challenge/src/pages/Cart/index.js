import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FiIcon from 'react-native-vector-icons/Feather';
import McIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Alert } from 'react-native';
import {
  Container,
  CartView,
  CartList,
  CartItem,
  Product,
  ProductImage,
  ProductInfo,
  TrashButton,
  ProductName,
  ProductPrice,
  SubTotalContainer,
  Amount,
  AmountText,
  SubTotal,
  Total,
  TotalContainer,
  TotalText,
  FinishButtom,
  FinishButtomText,
  EmptyCartContainer,
  EmptCartAdvice,
} from './styles';

import { formatPrice } from '../../util/format';

import {
  updateAmountRequest,
  removeFromCart,
} from '../../store/modules/cart/actions';

import colors from '../../styles/colors';

export default function Cart() {
  const dispatch = useDispatch();

  function handleUpdateAmount(id, amount) {
    dispatch(updateAmountRequest(id, amount));
  }

  function handleFinish() {
    Alert.alert('Ok ok, você estava curioso...');
  }

  const cart = useSelector((state) =>
    state.cart.map((product) => ({
      ...product,
      subTotal: formatPrice(product.amount * product.price),
    }))
  );

  const total = useSelector((state) =>
    formatPrice(
      state.cart.reduce(
        (sumTotal, product) => sumTotal + product.amount * product.price,
        0
      )
    )
  );

  return (
    <Container>
      <CartView>
        {cart.length > 0 ? (
          <CartList
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          >
            {cart.map((product) => (
              <CartItem key={String(product.id)}>
                <Product>
                  <ProductImage
                    source={{
                      uri: product.image,
                    }}
                  />
                  <ProductInfo>
                    <ProductName>{product.title}</ProductName>
                    <ProductPrice>{product.price}</ProductPrice>
                  </ProductInfo>
                  <TrashButton
                    onPress={() => dispatch(removeFromCart(product.id))}
                  >
                    <McIcon name="trash-can" size={32} color={colors.primary} />
                  </TrashButton>
                </Product>

                <SubTotalContainer>
                  <Amount>
                    <TouchableOpacity
                      onPress={() =>
                        handleUpdateAmount(product.id, product.amount - 1)
                      }
                    >
                      <FiIcon
                        name="minus-circle"
                        color={colors.primary}
                        size={32}
                      />
                    </TouchableOpacity>
                    <AmountText>{product.amount}</AmountText>
                    <TouchableOpacity
                      onPress={() =>
                        handleUpdateAmount(product.id, product.amount + 1)
                      }
                    >
                      <FiIcon
                        name="plus-circle"
                        color={colors.primary}
                        size={32}
                      />
                    </TouchableOpacity>
                  </Amount>
                  <SubTotal>{product.subTotal}</SubTotal>
                </SubTotalContainer>
              </CartItem>
            ))}

            <TotalContainer>
              <TotalText>Total</TotalText>
              <Total>{total}</Total>
            </TotalContainer>
            <FinishButtom onPress={() => handleFinish()}>
              <FinishButtomText>Finalizar pedido</FinishButtomText>
            </FinishButtom>
          </CartList>
        ) : (
          <EmptyCartContainer>
            <McIcon name="cart-off" color="#eeeeee" size={64} />
            <EmptCartAdvice>Seu Carrinho está vazio</EmptCartAdvice>
          </EmptyCartContainer>
        )}
      </CartView>
    </Container>
  );
}
