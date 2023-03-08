import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider} from 'native-base';
import {Text} from 'react-native';

function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Text>Hi!</Text>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default App;
