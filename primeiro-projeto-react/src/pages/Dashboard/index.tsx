import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => (
  <>
    <Title>Explore repositórios no Github.</Title>
    <Form>
      <input type="text" placeholder="Digite o nome do repositório" />
      <button type="submit">Pesquisar</button>
    </Form>

    <Repositories>
      <a href="teste">
        <img
          src="https://avatars0.githubusercontent.com/u/48136118?s=460&u=6101d27e8851db314005129fbd5ff2a4a7996880&v=4"
          alt="Angelo Evangelista"
        />
        <div>
          <strong>angeloevangelista/qrcodegenerator</strong>
          <p>A simpatic QR Code generator for intelligent people</p>
        </div>

        <FiChevronRight size={24} />
      </a>
      <a href="teste">
        <img
          src="https://avatars0.githubusercontent.com/u/48136118?s=460&u=6101d27e8851db314005129fbd5ff2a4a7996880&v=4"
          alt="Angelo Evangelista"
        />
        <div>
          <strong>angeloevangelista/qrcodegenerator</strong>
          <p>A simpatic QR Code generator for intelligent people</p>
        </div>

        <FiChevronRight size={24} />
      </a>
      <a href="teste">
        <img
          src="https://avatars0.githubusercontent.com/u/48136118?s=460&u=6101d27e8851db314005129fbd5ff2a4a7996880&v=4"
          alt="Angelo Evangelista"
        />
        <div>
          <strong>angeloevangelista/qrcodegenerator</strong>
          <p>A simpatic QR Code generator for intelligent people</p>
        </div>

        <FiChevronRight size={24} />
      </a>
      <a href="teste">
        <img
          src="https://avatars0.githubusercontent.com/u/48136118?s=460&u=6101d27e8851db314005129fbd5ff2a4a7996880&v=4"
          alt="Angelo Evangelista"
        />
        <div>
          <strong>angeloevangelista/qrcodegenerator</strong>
          <p>A simpatic QR Code generator for intelligent people</p>
        </div>

        <FiChevronRight size={24} />
      </a>
      <a href="teste">
        <img
          src="https://avatars0.githubusercontent.com/u/48136118?s=460&u=6101d27e8851db314005129fbd5ff2a4a7996880&v=4"
          alt="Angelo Evangelista"
        />
        <div>
          <strong>angeloevangelista/qrcodegenerator</strong>
          <p>A simpatic QR Code generator for intelligent people</p>
        </div>

        <FiChevronRight size={24} />
      </a>
      <a href="teste">
        <img
          src="https://avatars0.githubusercontent.com/u/48136118?s=460&u=6101d27e8851db314005129fbd5ff2a4a7996880&v=4"
          alt="Angelo Evangelista"
        />
        <div>
          <strong>angeloevangelista/qrcodegenerator</strong>
          <p>A simpatic QR Code generator for intelligent people</p>
        </div>

        <FiChevronRight size={24} />
      </a>
    </Repositories>
  </>
);

export default Dashboard;
