import React from 'react';
import { Link } from 'react-router-dom';
import { MdChevronLeft } from 'react-icons/md';

import { FiCheck } from 'react-icons/fi';
import Button from '~/components/Button';
import Input from '~/components/Input';
import AvatarInput from '~/components/AvatarInput';

import { Container, Form, Header, Content } from './style';

export default function DeliverymanRegister() {
  function handleSubmit(formData) {
    console.tron.log(formData);
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Header>
          <h2>Cadastro de entregador</h2>
          <div>
            <Link to="/deliverymans">
              <Button color="#CCCCCC">
                <MdChevronLeft size={32} />
                Voltar
              </Button>
            </Link>
            <Button type="submit">
              <FiCheck size={32} />
              Salvar
            </Button>
          </div>
        </Header>

        <Content>
          <AvatarInput name="avatar" />
          <Input
            label="Nome"
            type="text"
            name="name"
            placeholder="Nome Completo"
          />
          <Input
            label="Email"
            type="email"
            name="email"
            placeholder="example@email.com"
          />
        </Content>
      </Form>
    </Container>
  );
}
