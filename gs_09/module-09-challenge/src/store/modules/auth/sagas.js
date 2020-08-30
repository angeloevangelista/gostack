import { call, all, takeLatest, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  const { email, password } = payload;

  try {
    const response = yield call(api.post, '/sessions', {
      email,
      password: String(password),
    });

    const { token, name } = response.data;

    const user = {
      name,
      email,
    };

    yield put(signInSuccess(token, user));

    api.defaults.headers.Authorization = `Bearer ${token}`;
  } catch (error) {
    yield put(signFailure());

    toast.error('Ops.. houve um erro ao logar, confira seus dados');
  }
}

function setToken({ payload }) {
  const { auth } = payload;

  if (auth) {
    api.defaults.headers.Authorization = `Bearer ${auth.token}`;
  }
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('persist/REHYDRATE', setToken),
]);
