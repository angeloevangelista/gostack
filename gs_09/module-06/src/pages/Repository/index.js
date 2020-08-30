import React, { Component } from 'react';
import { WebView } from 'react-native-webview';
import { ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

import { Container } from './styles';

class Repository extends Component {
  static navigationOptions = ({ route }) => {
    const { repository } = route.params;

    return {
      title: repository.name,
      headerTitleAlign: 'center',
    };
  };

  static propTypes = {
    route: PropTypes.shape({
      params: PropTypes.shape({
        repository: PropTypes.shape({
          name: PropTypes.string,
          html_url: PropTypes.string,
        }),
      }),
    }).isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  state = {
    loading: true,
    repository: {},
  };

  componentDidMount() {
    const { route } = this.props;
    const { repository } = route.params;

    this.setState({
      repository,
    });
  }

  render() {
    const { repository, loading } = this.state;

    return (
      <Container loading={loading}>
        <WebView
          style={{ flex: 1 }}
          source={{ uri: repository.html_url }}
          onLoad={() => this.setState({ loading: false })}
        />

        {loading && (
          <ActivityIndicator
            color="#7159c1"
            style={{ position: 'absolute' }}
            size={36}
          />
        )}
      </Container>
    );
  }
}

export default Repository;
