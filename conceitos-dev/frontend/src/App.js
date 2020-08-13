import React, { useState, useEffect } from 'react';

import api from './services/api';

import './App.css';

import Header from './components/Header';

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api
      .get('projects')
      .then((response) => setProjects(response.data))
      .catch((err) => {
        alert('Falha ao carregar projetos');
        console.warn(err);
      });
  }, []);

  async function handleAddProject() {
    // setProjects([...projects, `Projeto numero ${projects.length}`]);

    try {
      const response = await api.post('projects', {
        title: `Projeto número ${Date.now()}`,
        owner: 'Angelo',
      });

      const project = response.data;

      setProjects([...projects, project]);
    } catch (err) {
      alert('Falha ao adicionar projeto');
      console.warn(err);
    }
  }

  return (
    <>
      <Header title="Projects" />

      <ul>
        {projects.map((project) => (
          <li key={project.id}>{project.title}</li>
        ))}
      </ul>

      <button type="button" onClick={handleAddProject}>
        Adicionar projeto
      </button>
    </>
  );
}

export default App;
