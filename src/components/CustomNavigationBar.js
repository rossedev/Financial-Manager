import {getHeaderTitle} from '@react-navigation/elements';
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

  const toggleTheme = () => {
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
