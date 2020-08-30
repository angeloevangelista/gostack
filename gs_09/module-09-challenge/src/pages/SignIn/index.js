import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/fastfeet-logo-purple.svg';

import { signInRequest } from '~/store/modules/auth/actions';

const SignInSchema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um em e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});

export default function SignIn() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <img src={logo} alt="Fastfeet" />

      <Form schema={SignInSchema} onSubmit={handleSubmit}>
        <strong>Seu E-Mail</strong>
        <Input type="email" name="email" placeholder="exemplo@email.com" />

        <strong>Sua senha</strong>
        <Input type="password" name="password" placeholder="*************" />

        <button type="submit">
          {loading ? 'Carregando...' : 'Entrar no sistema'}
        </button>
      </Form>
    </>
  );
}
