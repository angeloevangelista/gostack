import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  Text,
  StatusBar,
  Alert,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import api from './services/api';

import styles from './styles';

const App = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api
      .get('projects')
      .then((response) => {
        setProjects(response.data);
      })
      .catch(() => Alert.alert('Falha ao carregar projetos'));
  }, []);

  async function handleAddProject() {
    const response = await api.post('projects', {
      title: `Projero número ${Date.now()}`,
      owner: 'Angelo Evangelista',
    });

    setProjects([...projects, response.data]);
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />

      <SafeAreaView style={styles.container}>
        <FlatList
          data={projects}
          keyExtractor={(project) => project.id}
          renderItem={({ item: project }) => (
            <Text style={styles.project}>{project.title}</Text>
          )}
        />

        <TouchableOpacity
          onPress={handleAddProject}
          activeOpacity={0.65}
          style={styles.button}>
          <Text style={styles.buttonText}>Adicionar projeto</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

export default App;
