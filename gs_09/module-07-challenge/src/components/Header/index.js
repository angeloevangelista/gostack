import React from 'react';
import { useSelector } from 'react-redux';

import Icon from 'react-native-vector-icons/dist/MaterialIcons';

import { TouchableOpacity } from 'react-native-gesture-handler';
import logo from '../../assets/logo.png';

import { Container, Logo, Cart, CartAmount } from './styles';

export default function Header({ navigation }) {
  function handleNavigate(page) {
    navigation.navigate(page);
  }

  const cart = useSelector((state) => state.cart);

  return (
    <Container>
      <TouchableOpacity onPress={() => handleNavigate('Home')}>
        <Logo resizeMode="center" source={logo} />
      </TouchableOpacity>

      <Cart onPress={() => handleNavigate('Cart')}>
        <Icon name="shopping-basket" color="#fff" size={24} />
        <CartAmount>{cart.length}</CartAmount>
      </Cart>
    </Container>
  );
}
