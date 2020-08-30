import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
// import { WebView } from 'react-native-webview';

import api from '../../services/api';

import {
  Container,
  Header,
  Avatar,
  Name,
  Bio,
  Stars,
  Starred,
  OwnerAvatar,
  Info,
  Title,
  Author,
} from './styles';

export default class User extends Component {
  static navigationOptions = ({ route }) => {
    const { user } = route.params;

    return {
      title: user.name,
      headerTitleAlign: 'center',
    };
  };

  static propTypes = {
    route: PropTypes.shape({
      params: PropTypes.shape({
        user: PropTypes.shape({
          id: PropTypes.number,
          name: PropTypes.string,
          avatar: PropTypes.string,
          login: PropTypes.string,
          bio: PropTypes.string,
        }),
      }),
    }).isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  state = {
    page: 1,
    user: '',
    stars: [],
    loading: false,
    refreshing: false,
    loadingMore: false,
  };

  async componentDidMount() {
    const { route } = this.props;
    const { user } = route.params;

    const { page } = this.state;

    this.setState({ loading: true });

    const response = await api.get(`/users/${user.login}/starred`, {
      params: {
        page,
      },
    });

    this.setState({
      stars: response.data,
      loading: false,
      refreshing: false,
      page: page + 1,
      user,
    });
  }

  handleNavigate = (repository) => {
    const { navigation } = this.props;

    navigation.navigate('Repository', { repository });
  };

  loadMore = async () => {
    this.setState({ loadingMore: true });

    const { stars, user, page } = this.state;

    const { data } = await api.get(`/users/${user.login}/starred`, {
      params: {
        page,
      },
    });

    this.setState({
      stars: [...stars, ...data],
      loadingMore: false,
      page: page + 1,
    });
  };

  refreshList = async () => {
    await this.setState({
      loading: true,
      refreshing: true,
      page: 1,
      stars: [],
    });

    const { user, page } = this.state;

    const response = await api.get(`/users/${user.login}/starred`, {
      params: {
        page,
      },
    });

    this.setState({
      stars: response.data,
      loading: false,
      refreshing: false,
      page: page + 1,
    });
  };

  render() {
    const { route } = this.props;
    const { user } = route.params;

    const { stars, loading, loadingMore, refreshing } = this.state;

    return (
      <Container loading={loading}>
        {loading ? (
          <ActivityIndicator color="#7159c1" size={36} />
        ) : (
          <>
            <Header>
              <Avatar source={{ uri: user.avatar }} />
              <Name>{user.name}</Name>
              <Bio>{user.bio}</Bio>
            </Header>

            <Stars
              data={stars}
              keyExtractor={(star) => String(star.id)}
              onEndReachedThreshold={0.3}
              onEndReached={this.loadMore}
              onRefresh={this.refreshList}
              refreshing={refreshing}
              renderItem={({ item }) => (
                <Starred onPress={() => this.handleNavigate(item)}>
                  <OwnerAvatar source={{ uri: item.owner.avatar_url }} />
                  <Info>
                    <Title>{item.name}</Title>
                    <Author>{item.owner.login}</Author>
                  </Info>
                </Starred>
              )}
            />
            {loadingMore && (
              <ActivityIndicator
                color="#7159c1"
                size={36}
                style={{ backgroundColor: 'rgba(0,0,0,0.0)' }}
              />
            )}
          </>
        )}
      </Container>
    );
  }
}
