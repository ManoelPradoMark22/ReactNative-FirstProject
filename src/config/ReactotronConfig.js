import Reactotron from 'reactotron-react-native';

if (__DEV__) {
  const tron = Reactotron.configure({ host: '172.17.192.1' }) // ip do pc
    .useReactNative()
    .connect();

  console.tron = tron;

  tron.clear();
  /* Limpar a timeline do tron sempre que dou um refresh na aplicacao
  é opcional, caso nao queira é só remover aqui
  Atenção! no host usei o ip 10.0.0.161 para o dispositivo físico
  e o ip 172.17.192.1 para o emulador!
  basta, no cmd, executar ipconfig q suas infos de ip irão aparecer */
}
