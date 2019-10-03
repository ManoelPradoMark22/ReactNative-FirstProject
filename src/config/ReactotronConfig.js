import Reactotron from 'reactotron-react-native';

if (__DEV__) {
  /* retorna true qnd o usuario esta emulando aplicacao em ambiente de
  desenvolvimento, ou seja, td aqui dentro nao vai executar em amb de producao */
  const tron = Reactotron.configure({ host: '192.168.114.17' }) // ip do pc
    .useReactNative()
    .connect();

  console.tron = tron;

  tron.clear();
  /* Limpar a timeline do tron sempre que dou um refresh na aplicacao
  é opcional, caso nao queira é só remover aqui */
}

/*
caso esteja emulando atraves do usb:
const tron = Reactotron.configure({host: 'ip_do_computador'})
    .useReactNative()
    .connect();

Caso vc esteja no android e mesmo fazendo o passo anterior ainda assim
nada apareceu no reactoton, precisaremos fazer um redirecionamento de portas.
execute na raiz do projeto: add reverse tcp:9090 tcp:9090
se o adb nao estiver configurado no path do seu pc, execute esse codigo ao invés
do outro, mas primeiro execute um cd para chegar ao diretório:
cd C:\Users\manoe\AppData\Local\Android\Sdk\platform-tools
e entao execute:
adb reverse tcp:9090 tcp:9090 */
