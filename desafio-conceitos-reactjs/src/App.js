import React, { useEffect, useState } from 'react';
import api from './services/api';

import './styles.css';

function App() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    async function loadRepositories() {
      try {
        const response = await api.get('repositories');

        setRepositories(response.data);
      } catch (err) {
        alert('Falha ao carregar os repositórios');
        console.warn(err);
      }
    }

    loadRepositories();
  }, []);

  async function handleAddRepository() {
    const response = await api.post('repositories', {
      techs: ['Node', 'Express', 'TypeScript'],
      title: `Projeto ${Date.now()}`,
      url: 'https://github.com/angeloevangelista/gostack',
    });

    setRepositories([...repositories, response.data]);
  }

  async function handleRemoveRepository(id) {
    try {
      await api.delete(`repositories/${id}`);

      setRepositories(repositories.filter((repo) => repo.id !== id));
    } catch (err) {
      alert('Falha ao excluir');
      console.warn(err);
    }
  }

  return (
    <div>
      <ul data-testid="repository-list">
        {repositories.map((repository) => (
          <li key={repository.id}>
            {repository.title}
            <button onClick={() => handleRemoveRepository(repository.id)}>
              Remover
            </button>
          </li>
        ))}
      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
