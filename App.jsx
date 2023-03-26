import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailRegisters from './src/components/DetailRegisters';
import MenuFab from './src/components/MenuFab';
import {Provider} from './src/context/Provider';
import Home from './src/pages/Home';

function App() {
  const Stack = createNativeStackNavigator();

  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#424874',
              textAlign: 'center',
            },
            headerTintColor: '#fff',
          }}>
          <Stack.Screen
            name="Home"
            options={{title: 'Home'}}
            component={Home}
          />
          <Stack.Screen
            name="DetailRegisters"
            options={{title: 'Detail Registers'}}
            component={DetailRegisters}
          />
        </Stack.Navigator>
        <MenuFab />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
