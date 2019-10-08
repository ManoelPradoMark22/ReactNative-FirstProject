import Reactotron from 'reactotron-react-native';

if (__DEV__) {
  const tron = Reactotron.configure({ host: '10.0.0.161' }) // ip do pc
    .useReactNative()
    .connect();

  console.tron = tron;

  tron.clear();
  /* Limpar a timeline do tron sempre que dou um refresh na aplicacao
  é opcional, caso nao queira é só remover aqui
  Atenção! no host usei o ip 10.0.0.161 ou o ip 172.17.192.1
  qnd o reactotron nao reconhece um deles, simplesmente troco pelo outro
  Basta, no cmd, executar ipconfig q suas infos de ip irão aparecer */
}
