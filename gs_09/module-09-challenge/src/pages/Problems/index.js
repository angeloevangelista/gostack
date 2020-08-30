import React, { useState, useEffect } from 'react';
import { MdDeleteForever, MdVisibility } from 'react-icons/md';

import { FiMoreHorizontal } from 'react-icons/fi';

import { AiOutlineCloseCircle } from 'react-icons/ai';
import { Actions } from '~/components/Grid/Line/styles';

import { Container } from './style';

import getLoremIpsum from '~/utils/getLoremIpsum';
import api from '~/services/api';

import Grid from '~/components/Grid';
import Line from '~/components/Grid/Line';
import Detail from '~/components/Detail';

export default function Problems() {
  const [problems, setProblems] = useState([]);
  const [showDetail, setShowDetail] = useState(false);

  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    async function getProblems() {
      try {
        const response = await api.get('/delivery/problems');

        setProblems(response.data);
      } catch (error) {
        console.tron.log(error.response);
      }
    }

    getProblems();
  }, []);

  function handleClickActions(problemId) {
    if (selectedIndex === problemId) {
      setSelectedIndex(0);
    } else {
      setSelectedIndex(problemId);
    }
  }

  return (
    <Container>
      <h2>Problemas na entrega</h2>

      <Grid>
        <thead>
          <tr>
            <th>ID</th>
            <th>Problema</th>
            <th>Ações</th>
          </tr>
        </thead>

        <tbody>
          {problems.map((problem) => (
            <Line
              selected={selectedIndex === problem.id}
              key={String(problem.id)}
            >
              <td>{`#${problem.id}`}</td>
              <td>
                <span>{problem.description}</span>
              </td>
              <td>
                <button
                  onClick={() => handleClickActions(problem.id)}
                  type="button"
                >
                  <FiMoreHorizontal size={32} />
                </button>
                {selectedIndex === problem.id && (
                  <Actions>
                    <button onClick={() => setShowDetail(true)} type="button">
                      <MdVisibility size={32} color="#8E5BE8" />
                      Visualizar
                    </button>
                    <hr />
                    <button type="button">
                      <MdDeleteForever size={32} color="#DE3B3B" />
                      Cancelar encomenda
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
            <h3>Visualizar problema</h3>
            <p>{getLoremIpsum()}</p>
          </section>
        </Detail>
      )}
    </Container>
  );
}
