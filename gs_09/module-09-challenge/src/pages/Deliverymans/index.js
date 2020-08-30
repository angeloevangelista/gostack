import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiMoreHorizontal, FiPlus } from 'react-icons/fi';
import { MdDeleteForever } from 'react-icons/md';
import { IoMdCreate } from 'react-icons/io';

import SearchInput from '~/components/SearchInput';
import Button from '~/components/Button';
import GridHeader from '~/components/GridHeader';
import Grid from '~/components/Grid';
import Line from '~/components/Grid/Line';

import api from '~/services/api';

import { Container } from './style';
import { getRandomColor, getInitials } from '~/utils';
import { Actions } from '~/components/Grid/Line/styles';
import history from '~/services/history';

export default function Deliverymans() {
  const [deliverymans, setDeliverymans] = useState([]);

  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    async function getDeliverymans() {
      try {
        const response = await api.get('/deliverymans');

        const data = response.data.map((deliveryman) => ({
          ...deliveryman,
          initials: getInitials(deliveryman.name),
          color: getRandomColor(),
        }));

        setDeliverymans(data);
      } catch (error) {
        console.tron.log(error.response);
      }
    }

    getDeliverymans();
  }, []);

  function handleClickActions(deliverymanId) {
    if (selectedIndex === deliverymanId) {
      setSelectedIndex(0);
    } else {
      setSelectedIndex(deliverymanId);
    }
  }

  return (
    <Container>
      <h2>Gerenciando entregadores</h2>

      <GridHeader>
        <SearchInput searchFor="entregadores" />
        <Link to="/deliverymans/register">
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
            <th>Foto</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Ações</th>
          </tr>
        </thead>

        <tbody>
          {deliverymans.map((deliveryman) => (
            <Line
              photoPosition={2}
              selected={selectedIndex === deliveryman.id}
              color={deliveryman.color}
              key={String(deliveryman.id)}
            >
              <td>{`#${deliveryman.id}`}</td>
              <td>
                <span>{deliveryman.initials}</span>
              </td>
              <td>{deliveryman.name}</td>
              <td>
                <span>{deliveryman.email}</span>
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
                    <button
                      type="button"
                      onClick={() => history.push('/devliverymans/edit')}
                    >
                      <IoMdCreate size={32} color="#4D85EE" />
                      Editar
                    </button>
                    <hr />
                    <button type="button">
                      <MdDeleteForever size={32} color="#DE3B3B" />
                      Excluir
                    </button>
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
