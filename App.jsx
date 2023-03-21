import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NativeBaseProvider} from 'native-base';
import Home from './src/pages/Home';
import {Provider} from './src/context/Provider';
import MenuFab from './src/components/MenuFab';

function App() {
  const Stack = createNativeStackNavigator();

  return (
    <Provider>
      <NativeBaseProvider>
        <NavigationContainer
          initialRouteName="Home"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#407088',
              textAlign: 'center',
            },
            headerTintColor: '#fff',
          }}>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
              headerStyle: {
                backgroundColor: '#407088',
                textAlign: 'center',
              },
              headerTintColor: '#fff',
            }}>
            <Stack.Screen
              name="Home"
              options={{title: 'My home'}}
              component={Home}
            />
          </Stack.Navigator>
          <MenuFab />
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
}

export default App;
