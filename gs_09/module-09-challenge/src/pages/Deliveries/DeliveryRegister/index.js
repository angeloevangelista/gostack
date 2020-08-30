import React from 'react';
import { Link } from 'react-router-dom';
import { MdChevronLeft } from 'react-icons/md';
import { FiCheck } from 'react-icons/fi';

import Button from '~/components/Button';
import Input from '~/components/Input';
import Select from '~/components/Select';

import { Container, Form, Header, Content, Line } from './style';

export default function DeliveryRegister() {
  function handleSubmit(formData) {
    console.tron.log(formData);
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Header>
          <h2>Cadastro de encomenda</h2>
          <div>
            <Link to="/deliveries">
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
          <Line>
            <Select
              options={[
                { id: '0', title: 'string' },
                { id: '1', title: 'int' },
              ]}
              label="Destinatário"
              name="recipient"
              placeholder="Escolha o destinatário"
            />
            <Select
              options={[
                { id: '0', title: 'string' },
                { id: '1', title: 'int' },
              ]}
              label="Entregador"
              name="deliveryman"
              placeholder="Escolha o entregador"
            />
          </Line>

          <Input
            label="Nome do produto"
            name="product"
            placeholder="Produto"
            type="text"
          />
        </Content>
      </Form>
    </Container>
  );
}
