/* eslint-disable function-paren-newline */
/* eslint-disable comma-dangle */
/* eslint-disable operator-linebreak */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdShoppingCart } from 'react-icons/md';

import { addToCartRequest } from '../../store/modules/cart/actions';

import api from '../../services/api';

import { formatPrice } from '../../util/format';

import { ProductList } from './styles';

export default function Home() {
  const [products, setProducts] = useState([]);

  const dispatch = useDispatch();

  const amountInCart = useSelector((state) =>
    state.cart.map((product) => ({
      id: product.id,
      amount: product.amount,
    }))
  );

  useEffect(() => {
    async function getProducts() {
      const response = await api.get('products');

      const serializedProducts = response.data.map((product) => ({
        ...product,
        formattedPrice: formatPrice(product.price),
      }));

      setProducts(serializedProducts);
    }

    getProducts();
  }, []);

  function handleAddProduct(id) {
    dispatch(addToCartRequest(id));
  }

  return (
    <ProductList>
      {products.map((product) => (
        <li key={String(product.id)}>
          <img src={product.image} alt={product.title} />
          <strong>{product.title}</strong>
          <span>{product.formattedPrice}</span>

          <button type="button" onClick={() => handleAddProduct(product.id)}>
            <div>
              <MdShoppingCart size={16} color="#fff" />
              {(amountInCart.find((item) => item.id === product.id) &&
                amountInCart.find((item) => item.id === product.id).amount) ||
                0}
            </div>

            <span>ADICIONAR AO CARRINHO</span>
          </button>
        </li>
      ))}
    </ProductList>
  );
}
