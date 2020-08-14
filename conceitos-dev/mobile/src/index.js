import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  StatusBar,
  Alert,
  FlatList,
} from 'react-native';

import api from './services/api';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#7159c1',
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },

  project: {
    fontSize: 24,
    color: '#fff',
  },
});

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
      </SafeAreaView>
    </>
  );
};

export default App;
