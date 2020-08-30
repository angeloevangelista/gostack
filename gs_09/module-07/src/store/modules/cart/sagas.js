/* eslint-disable comma-dangle */
/* eslint-disable function-paren-newline */
// eslint-disable-next-line object-curly-newline
import { call, put, all, takeLatest, select } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import history from '../../../services/history';

import { formatPrice } from '../../../util/format';

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
    toast.error('Limite de estoque atingido');
    return;
  }

  if (productExists) {
    yield put(updateAmountSuccess(id, amount));
  } else {
    const response = yield call(api.get, `/products/${id}`);

    const data = {
      ...response.data,
      amount: 1,
      formattedPrice: formatPrice(response.data.price),
    };

    yield put(addToCartSuccess(data));

    history.push('/cart');
  }
}

function* updateAmount({ id, amount }) {
  if (amount <= 0) return;

  const stockResponse = yield call(api.get, `/stock/${id}`);

  const { amount: stockAmount } = stockResponse.data;

  if (amount > stockAmount) {
    toast.error('Limite de estoque atingido');
    yield put(updateAmountSuccess(id, stockAmount));
    return;
  }

  yield put(updateAmountSuccess(id, amount));
}

export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
]);
