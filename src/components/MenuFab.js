import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {FAB} from 'react-native-paper';
import {setIsNewRegister} from '../context/Actions';
import {useAppContext} from '../context/Provider';

const MenuFab = () => {
  const navigation = useNavigation();
  const {dispatch} = useAppContext();

  const changeNavigation = route => {
    navigation.navigate(route);
  };

  const openModalToNew = () => {
    dispatch(setIsNewRegister(true));
  };

  const [state, setState] = useState({open: false});

  const onStateChange = ({open}) => setState({open});

  const {open} = state;

  return (
    <FAB.Group
      open={open}
      visible
      icon={open ? 'close' : 'plus'}
      actions={[
        {
          icon: 'plus',
          label: 'Add Register',
          onPress: () => openModalToNew(),
        },
        {
          icon: 'wallet',
          label: 'Detail',
          onPress: () => changeNavigation('DetailRegisters'),
        },
        {
          icon: 'home',
          label: 'Home',
          onPress: () => changeNavigation('Home'),
        },
      ]}
      onStateChange={onStateChange}
      onPress={() => {
        if (open) {
          // do something if the speed dial is open
        }
      }}
    />
  );
};

export default MenuFab;
