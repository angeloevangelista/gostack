import { ToastAndroid } from 'react-native';
import { call, put, select, all, takeLatest } from 'redux-saga/effects';

import { formatPrice } from '../../../util/format';

import api from '../../../services/api';

import { addToCartSuccess, updateAmountSuccess } from './actions';

function* addToCart({ id }) {
  const productExists = yield select((state) =>
    state.cart.find((product) => product.id === id)
  );

  const stockResponse = yield call(api.get, `/stock/${id}`);

  const currentAmount = productExists ? productExists.amount : 0;
  const { amount: stockAmount } = stockResponse.data;

  const amount = currentAmount + 1;

  if (amount > stockAmount) {
    ToastAndroid.show('Limite de estoque atingido', 1000);
    return;
  }

  const response = yield call(api.get, `/products/${id}`);

  if (productExists) {
    yield put(updateAmountSuccess(id, amount));
  } else {
    const data = {
      ...response.data,
      amount: 1,
      formattedPrice: formatPrice(response.data.price),
    };

    yield put(addToCartSuccess(data));
  }
}

function* updateAmount({ id, amount }) {
  if (amount <= 0) return;

  const stock = yield call(api.get, `/stock/${id}`);
  const stockAmount = stock.data.amount;

  if (amount > stockAmount) {
    ToastAndroid.show('Limite de estoque atingido', 1000);
    return;
  }

  yield put(updateAmountSuccess(id, amount));
}

export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
]);
