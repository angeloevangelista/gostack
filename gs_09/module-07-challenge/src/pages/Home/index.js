import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

import { addToCartRequest } from '../../store/modules/cart/actions';

import { formatPrice } from '../../util/format';

import {
  Container,
  ProductList,
  ProductImage,
  ProductItem,
  ProductInfo,
  ProductTitle,
  ProductPrice,
  AddButton,
  ProductAmount,
  ProductAmountText,
  AddButtonText,
} from './styles';

import api from '../../services/api';

export default function Home() {
  const [products, setProducts] = useState([]);

  const amountInCart = useSelector((state) =>
    state.cart.map((product) => ({
      id: product.id,
      amount: product.amount,
    }))
  );

  useEffect(() => {
    async function getProducts() {
      const response = await api.get('/products');

      const serializedProducts = response.data.map((product) => ({
        ...product,
        formattedPrice: formatPrice(product.price),
      }));

      setProducts(serializedProducts);
    }

    getProducts();
  }, []);

  const dispatch = useDispatch();

  function handleAddButtom(id) {
    dispatch(addToCartRequest(id));
  }

  return (
    <Container>
      <ProductList
        data={products}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: product }) => (
          <View style={{ alignItems: 'center' }}>
            <ProductItem key={String(product.id)}>
              <ProductImage
                source={{
                  uri: product.image,
                }}
              />

              <ProductInfo>
                <ProductTitle>{product.title}</ProductTitle>
                <ProductPrice>{String(product.formattedPrice)}</ProductPrice>
              </ProductInfo>

              <AddButton onPress={() => handleAddButtom(product.id)}>
                <ProductAmount>
                  <Icon name="shopping-cart" color="#fff" size={16} />
                  <ProductAmountText>
                    {(amountInCart.find((item) => item.id === product.id) &&
                      amountInCart.find((item) => item.id === product.id)
                        .amount) ||
                      0}
                  </ProductAmountText>
                </ProductAmount>
                <AddButtonText>Adicionar</AddButtonText>
              </AddButton>
            </ProductItem>
          </View>
        )}
      />
    </Container>
  );
}

Home.navigationOptions = {
  title: 'Produtos',
  headerTitleAlign: 'center',
};
