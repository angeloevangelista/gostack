import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiMoreHorizontal, FiPlus } from 'react-icons/fi';
import { MdDeleteForever, MdVisibility } from 'react-icons/md';
import { IoMdCreate } from 'react-icons/io';
import { AiOutlineCloseCircle } from 'react-icons/ai';

import noSignature from '~/assets/no-signature.svg';

import api from '~/services/api';

import SearchInput from '~/components/SearchInput';
import Button from '~/components/Button';
import GridHeader from '~/components/GridHeader';
import Grid from '~/components/Grid';
import Line from '~/components/Grid/Line';
import Detail from '~/components/Detail';

import { Actions } from '~/components/Grid/Line/styles';

import { getRandomColor, getStatus, getInitials } from '~/utils';

import { Container } from './style';
import formatDate from '~/utils/formatDate';

export default function Deliverys() {
  const [deliveries, setDeliveries] = useState([]);
  const [showDetail, setShowDetail] = useState(false);
  const [selectedDelivery, setSelectedDelivery] = useState(null);

  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    async function getDeliveries() {
      try {
        const response = await api.get('/deliveries');

        const data = response.data.map((delivery) => ({
          ...delivery,
          status: getStatus(
            delivery.start_date,
            delivery.end_date,
            delivery.canceled_at
          ),
          deliveryman: {
            ...delivery.deliveryman,
            initials: getInitials(delivery.deliveryman.name),
            color: getRandomColor(),
          },
          formattedDate: {
            start: formatDate(delivery.end_date),
            end: formatDate(delivery.start_date),
          },
        }));

        setDeliveries(data);
      } catch (error) {
        console.tron.log(error.response);
      }
    }

    getDeliveries();
  }, []);

  function handleClickActions(deliveryId) {
    if (selectedIndex === deliveryId) {
      setSelectedIndex(0);
    } else {
      setSelectedIndex(deliveryId);
    }
  }

  function handleClickDetails(deliveryId) {
    const delivery = deliveries.find((d) => d.id === deliveryId);
    setSelectedDelivery(delivery);

    setShowDetail(true);
  }

  return (
    <Container>
      <h2>Gerenciando encomendas</h2>

      <GridHeader>
        <SearchInput searchFor="encomendas" />
        <Link to="/deliveries/register">
          <Button type="button">
            <FiPlus size={32} />
            Cadastrar
          </Button>
        </Link>
      </GridHeader>

      <Grid>
        <thead>
          <tr>
            <th>ID</th>
            <th>Destinatários</th>
            <th>Entregador</th>
            <th>Cidade</th>
            <th>Estado</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>

        <tbody>
          {deliveries.map((delivery) => (
            <Line
              photoPosition={3}
              status={delivery.status.code}
              color={delivery.deliveryman.color}
              key={String(delivery.id)}
            >
              <td>{`#${delivery.id}`}</td>
              <td>{delivery.recipient.name}</td>
              <td className="photo">
                <span>{delivery.deliveryman.initials}</span>
                {delivery.deliveryman.name}
              </td>
              <td>{delivery.recipient.uf}</td>
              <td>{delivery.recipient.city}</td>
              <td>
                <span>{delivery.status.text}</span>
              </td>
              <td>
                <button
                  onClick={() => handleClickActions(delivery.id)}
                  type="button"
                >
                  <FiMoreHorizontal size={32} />
                </button>
                {selectedIndex === delivery.id && (
                  <Actions>
                    <button
                      onClick={() => handleClickDetails(delivery.id)}
                      type="button"
                    >
                      <MdVisibility size={32} color="#8E5BE8" />
                      Visualizar
                    </button>
                    <hr />
                    <button type="button">
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
      {showDetail && (
        <Detail>
          <button onClick={() => setShowDetail(false)} type="button">
            <AiOutlineCloseCircle size={32} />
          </button>
          <section>
            <h3>Informações da encomenda</h3>
            <span>{`Rua ${selectedDelivery.recipient.street}, ${selectedDelivery.recipient.number}`}</span>
            <span>{`${selectedDelivery.recipient.city} - ${selectedDelivery.recipient.uf}`}</span>
            <span>{selectedDelivery.recipient.cep}</span>
          </section>
          <hr />
          <section>
            <h3>Datas</h3>
            <span>
              <strong>Retirada: </strong>
              {selectedDelivery.formattedDate.start}
            </span>

            <span>
              <strong>Entrega: </strong>
              {selectedDelivery.formattedDate.end}
            </span>
          </section>
          <hr />
          <section>
            <h3>Assinatura do destinatário</h3>
            {selectedDelivery.signature ? (
              <img src={selectedDelivery.signature.url} alt="Assinatura" />
            ) : (
              <img src={noSignature} alt="Assinatura não fornecida" />
            )}
          </section>
        </Detail>
      )}
    </Container>
  );
}
