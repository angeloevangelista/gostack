import React from 'react';
import { Link } from 'react-router-dom';
import { MdChevronLeft } from 'react-icons/md';
import { FiCheck } from 'react-icons/fi';

import Button from '~/components/Button';
import Input from '~/components/Input';

import { Container, Form, Header, Content, Line } from './style';

export default function RecipientRegister() {
  function handleSubmit(formData) {
    console.tron.log(formData);
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Header>
          <h2>Cadastro de destinatário</h2>
          <div>
            <Link to="/recipients">
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
          <Input
            label="Nome"
            type="text"
            name="name"
            placeholder="Nome Completo"
          />

          <Line>
            <Input
              className="w-60"
              label="Rua"
              type="text"
              name="street"
              placeholder="Exemplo de nome"
            />
            <Input
              className="w-auto"
              label="Número"
              type="number"
              name="number"
              placeholder="9001"
            />
            <Input
              className="w-auto"
              label="Complemento"
              type="text"
              name="complement"
              placeholder="Casa"
            />
          </Line>

          <Line>
            <Input
              label="Cidade"
              type="text"
              name="city"
              placeholder="Exemplo de cidade"
            />
            <Input
              maxLength={2}
              label="Sigla Estado"
              type="text"
              name="uf"
              placeholder="SE"
            />
            <Input
              label="CEP"
              type="text"
              name="zipcode"
              placeholder="11111-111"
            />
          </Line>
        </Content>
      </Form>
    </Container>
  );
}
