import React, { useState, FormEvent, useEffect } from 'react';
import { FiChevronRight } from 'react-icons/fi';

import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories, Error } from './styles';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [inputError, setInputError] = useState('');
  const [newRepo, setNewRepo] = useState('');

  const [repositories, setRepositories] = useState<Repository[]>(
    (): Repository[] => {
      const storagedRepositories = localStorage.getItem(
        '@GithubExplorer:repositories',
      );

      if (storagedRepositories) {
        return JSON.parse(storagedRepositories);
      }

      return [];
    },
  );

  useEffect(() => {
    localStorage.setItem(
      '@GithubExplorer:repositories',
      JSON.stringify(repositories),
    );
  }, [repositories]);

  async function handleAddRepository(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!newRepo) {
      setInputError("Informe o repositório no formato 'autor/nome'");
      return;
    }

    if (newRepo.split('/').length !== 2) {
      setInputError("Informe o repositório no formato 'autor/nome'");
      return;
    }

    const repositoryAlreadySaved = repositories.find(
      (repo) => repo.full_name === newRepo.toLowerCase().trim(),
    );

    if (repositoryAlreadySaved) {
      setInputError('O repositório já está salvo');
      return;
    }

    try {
      const response = await api.get<Repository>(`repos/${newRepo}`);

      const repository = response.data;

      setRepositories([...repositories, repository]);
      setNewRepo('');
      setInputError('');
    } catch (err) {
      setInputError('Falha ao consultar este repositório');
    }
  }

  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github.</Title>

      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input
          value={newRepo}
          onChange={(e) => setNewRepo(e.currentTarget.value)}
          type="text"
          placeholder="Digite o nome do repositório"
        />
        <button type="submit">Pesquisar</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <Repositories>
        {repositories.map((repository) => (
          <a key={repository.full_name} href="teste">
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>

            <FiChevronRight size={24} />
          </a>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
