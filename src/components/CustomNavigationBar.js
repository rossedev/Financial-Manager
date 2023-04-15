import AsyncStorage from '@react-native-async-storage/async-storage';
import {getHeaderTitle} from '@react-navigation/elements';
import {useEffect} from 'react';
import {Appbar, Switch} from 'react-native-paper';
import {setToggleThemeDefault} from '../context/Actions';
import {useAppContext} from '../context/Provider';

export default function CustomNavigationBar({
  navigation,
  route,
  options,
  back,
}) {
  const {state, dispatch} = useAppContext();
  const title = getHeaderTitle(options, route.name);

  useEffect(() => {
    getToggleThemeSaved();
  }, []);

  const getToggleThemeSaved = async () => {
    const hasThemeSaved = await AsyncStorage.getItem('theme');
    dispatch(setToggleThemeDefault(JSON.parse(hasThemeSaved)));
  };

  const toggleTheme = () => {
    AsyncStorage.setItem('theme', `${!state.toggleThemeDefault}`);
    dispatch(setToggleThemeDefault(!state.toggleThemeDefault));
  };

  return (
    <Appbar.Header
      style={{
        backgroundColor: '#424874',
        textAlign: 'center',
      }}>
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title={title} color={'#fff'} />
      <Switch
        color={'#dcd6f7'}
        value={state.toggleThemeDefault}
        onValueChange={toggleTheme}
      />
    </Appbar.Header>
  );
}
