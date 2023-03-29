/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from './src/context/Provider';

export default function Main() {
  return (
    <Provider>
      <App />
    </Provider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
