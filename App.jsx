import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider as PaperProvider} from 'react-native-paper';
import CustomNavigationBar from './src/components/CustomNavigationBar';
import DetailRegisters from './src/components/DetailRegisters';
import MenuFab from './src/components/MenuFab';
import {CombinedDarkTheme, CombinedDefaultTheme} from './src/components/Themes';
import {useAppContext} from './src/context/Provider';
import Home from './src/pages/Home';

function App() {
  const {state} = useAppContext();
  const Stack = createNativeStackNavigator();

  return (
    <PaperProvider
      theme={
        state.toggleThemeDefault ? CombinedDefaultTheme : CombinedDarkTheme
      }>
      <NavigationContainer
        theme={
          state.toggleThemeDefault ? CombinedDefaultTheme : CombinedDarkTheme
        }>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            header: props => <CustomNavigationBar {...props} />,
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
    </PaperProvider>
  );
}

export default App;
