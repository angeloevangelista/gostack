import React, { useState } from 'react';

import './App.css';
import backgroundImg from './assets/background.jpg';

import Header from './components/Header';

function App() {
  const [projects, setProjects] = useState([
    'Desenvolvimento de App',
    'Front-end web',
  ]);

  function handleAddProject() {
    setProjects([...projects, `Projeto numero ${projects.length}`]);
  }

  return (
    <>
      <Header title="Projects" />

      <img width={300} src={backgroundImg} alt="background" />

      <ul>
        {projects.map((project) => (
          <li key={project}>{project}</li>
        ))}
      </ul>

      <button type="button" onClick={handleAddProject}>
        Adicionar projeto
      </button>
    </>
  );
}

export default App;
