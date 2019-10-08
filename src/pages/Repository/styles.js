import styled from 'styled-components/native';
/* instale: yarn add react-native-webview
em seguida faça o link: react-native link react-native-webview
If you ever need to uninstall React Native WebView, run react-native unlink
react-native-webview to unlink it. */
import { WebView } from 'react-native-webview';

export const Browser = styled(WebView)`
  flex: 1;
`;
