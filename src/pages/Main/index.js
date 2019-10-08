import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Keyboard, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../../services/api';

import {
  Container,
  Form,
  Input,
  SubmitButton,
  List,
  User,
  Avatar,
  Name,
  Bio,
  ProfileButton,
  ProfileButtonText,
} from './styles';

export default class Main extends Component {
  /* faremos apenas os prop-types da funcao navigate pq é o unico q utilizaremos
  do component navigation */
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  state = {
    newUser: '',
    users: [],
    loading: false,
  };

  /* precisa ser async para preeencher os dados no state */
  async componentDidMount() {
    const users = await AsyncStorage.getItem('users');

    if (users) {
      this.setState({ users: JSON.parse(users) });
    }
  }

  /* não precisa do async pq nao iremos utilizar o await dentro */
  componentDidUpdate(_, prevState) {
    const { users } = this.state;

    if (prevState.users !== users) {
      /* não nao precisar do await pq nao vai ser executado nada a seguir */
      AsyncStorage.setItem('users', JSON.stringify(users));
    }
  }

  /* vamos usar o async pq iremos utilizar o await */
  handleAddUser = async () => {
    // console.tron.log(this.state.newUser);
    const { users, newUser } = this.state;

    this.setState({ loading: true });

    const response = await api.get(`/users/${newUser}`);

    const data = {
      name: response.data.name,
      login: response.data.login,
      bio: response.data.bio,
      avatar: response.data.avatar_url,
    };

    this.setState({
      users: [...users, data],
      newUser: '',
      loading: false,
    });

    /* faz o teclado sumir no final da chamada */
    Keyboard.dismiss();
  };

  handleNavigate = user => {
    const { navigation } = this.props;

    navigation.navigate('User', { user });
  };

  static navigationOptions = {
    title: 'Usuários',
  };

  render() {
    const { users, newUser, loading } = this.state;

    return (
      <Container>
        <Form>
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Adicionar usuário"
            value={newUser}
            /* Aqui, diiferentemente da web, usamos onChangeText ao invés de
            onChange!  */
            onChangeText={text => this.setState({ newUser: text })}
            /* Para habilitar que o botao enviar do teclado tb envie o formulario,
            devemos utilizar essas duas propriedades a seguir */
            returnKeyType="send"
            onSubmitEditing={this.handleAddUser}
          />
          <SubmitButton
            loading={loading}
            /* lembre que nao existe o form aqui como na web, entao nao tem
            oSubmit no form, por isso usamos o onPress */
            onPress={this.handleAddUser}
          >
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Icon name="add" size={20} color="#fff" />
            )}
          </SubmitButton>
        </Form>

        <List
          data={users}
          keyExtractor={user => user.login}
          renderItem={({ item }) => (
            <User>
              <Avatar source={{ uri: item.avatar }} />
              <Name>{item.name}</Name>
              <Bio>{item.bio}</Bio>
              <ProfileButton
                onPress={
                  () => this.handleNavigate(item)
                  /* como queremos passar uma funcao como referencia, devemos fazer
              uma arrow functin! */
                }
              >
                <ProfileButtonText>Ver Perfil</ProfileButtonText>
              </ProfileButton>
            </User>
          )}
        />
      </Container>
    );
  }
}
