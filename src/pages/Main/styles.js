import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
`;

/* Não temos um componente de Form no RN entao
utilizaremos uma View comum */
export const Form = styled.View`
  flex-direction: row;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-color: #eee;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  flex: 1; /*ocupa toda largura possivel, fora a
  largura do proprio botão */
  height: 40px;
  background: #eee;
  border-radius: 4px;
  padding: 0 15px;
  border: 1px solid #eee;
`;

/* Vamos utilizar o botao RectButton do
react-native-gesture-handler pq ele se adapta
com as peculiaridades do android e do ios */
export const SubmitButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: #7159c1;
  border-radius: 4px;
  margin-left: 10px;
  padding: 0 12px;
  /*no reactnative nao tem a prop disable como na web, entao iremos usar o opacity */
  opacity: ${props => (props.loading ? 0.7 : 1)};
`;

export const List = styled.FlatList.attrs({
  /* remove a exibição da barra de rolagem q vem como padrao
  Basta procurar a documentacao do ScrollView (o flatlist extende o scrollview)
  para ver as props */
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const User = styled.View`
  align-items: center;
  margin: 0 20px 30px;
`;

export const Avatar = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 32px;
  background: #eee;
`;

export const Name = styled.Text`
  font-size: 14px;
  color: #333;
  font-weight: bold;
  margin-top: 4px;
  /*por mais que usamos o align itens na view como center, caso o texto tenha
  mais de uma linha precisamos utilizar o text-align: center aqui tb */
  text-align: center;
`;

export const Bio = styled.Text.attrs({
  /* limita o componente a um maximo de linhas desejado e coloca ... no final */
  numberOfLines: 2,
})`
  font-size: 13px;
  line-height: 18px;
  color: #999;
  margin-top: 5px;
  text-align: center;
`;

export const ProfileButton = styled(RectButton)`
  margin-top: 10px;
  /*alinha para ocupar a largura total do componente */
  align-self: stretch;
  border-radius: 4px;
  background: #7159c1;
  justify-content: center;
  align-items: center;
  height: 36px;
`;

export const ProfileButtonText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  /*caixa alta */
  text-transform: uppercase;
`;
