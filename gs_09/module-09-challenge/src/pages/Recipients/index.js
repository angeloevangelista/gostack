import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiMoreHorizontal, FiPlus } from 'react-icons/fi';
import { MdDeleteForever } from 'react-icons/md';
import { IoMdCreate } from 'react-icons/io';

import SearchInput from '~/components/SearchInput';
import Button from '~/components/Button';
import GridHeader from '~/components/GridHeader';

import api from '~/services/api';

import { Actions } from '~/components/Grid/Line/styles';

import { Container } from './style';

import Grid from '~/components/Grid';
import Line from '~/components/Grid/Line';

export default function Recipients() {
  const [recipients, setRecipients] = useState([]);

  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    async function getRecipients() {
      try {
        const response = await api.get('/recipients');

        const data = response.data.map((delivery) => ({
          ...delivery,
          address: `Rua ${delivery.street}, ${delivery.number}, ${delivery.city} - ${delivery.uf}`,
        }));

        setRecipients(data);
      } catch (error) {
        console.tron.log(error);
      }
    }

    getRecipients();
  }, []);

  function handleClickActions(recipientId) {
    if (selectedIndex === recipientId) {
      setSelectedIndex(0);
    } else {
      setSelectedIndex(recipientId);
    }
  }

  return (
    <Container>
      <h2>Gerenciando destinatários</h2>

      <GridHeader>
        <SearchInput searchFor="destinatários" />
        <Link to="/recipients/register">
          <Button>
            <FiPlus size={32} />
            Cadastrar
          </Button>
        </Link>
      </GridHeader>

      <Grid>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Endereço</th>
            <th>Ações</th>
          </tr>
        </thead>

        <tbody>
          {recipients.map((deliveryman) => (
            <Line
              selected={selectedIndex === deliveryman.id}
              color={deliveryman.color}
              key={String(deliveryman.id)}
            >
              <td>{`#${deliveryman.id}`}</td>
              <td>{deliveryman.name}</td>
              <td>
                <span>{deliveryman.address}</span>
              </td>
              <td>
                <button
                  onClick={() => handleClickActions(deliveryman.id)}
                  type="button"
                >
                  <FiMoreHorizontal size={32} />
                </button>
                {selectedIndex === deliveryman.id && (
                  <Actions>
                    <span>
                      <IoMdCreate size={32} color="#4D85EE" />
                      Editar
                    </span>
                    <hr />
                    <span>
                      <MdDeleteForever size={32} color="#DE3B3B" />
                      Excluir
                    </span>
                  </Actions>
                )}
              </td>
            </Line>
          ))}
        </tbody>
      </Grid>
    </Container>
  );
}
