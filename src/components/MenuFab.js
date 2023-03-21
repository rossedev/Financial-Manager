import {Actionsheet, Fab, useDisclose} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import {useAppContext} from '../context/Provider';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import {setIsNewRegister} from '../context/Actions';

const MenuFab = () => {
  const navigation = useNavigation();
  const {dispatch} = useAppContext();
  const {isOpen, onOpen, onClose} = useDisclose();

  const changeNavigation = route => {
    navigation.navigate(route);
    onClose();
  };

  const openModalToNew = () => {
    dispatch(setIsNewRegister(true));
    onClose();
  };

  return (
    <>
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content>
          <Actionsheet.Item
            startIcon={Icon.HomeOutlined}
            onPress={() => changeNavigation('Home')}>
            Home
          </Actionsheet.Item>
          <Actionsheet.Item
            startIcon={Icon.ArrowsAltOutlined}
            onPress={() => changeNavigation('DetailAccount')}>
            Detail
          </Actionsheet.Item>
          <Actionsheet.Item
            startIcon={Icon.AppstoreAddOutlined}
            onPress={openModalToNew}>
            Add Value
          </Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>

      <Fab
        placement="bottom-right"
        shadow={2}
        size="sm"
        icon={Icon.AppstoreAddOutlined}
        onPress={onOpen}
        bg="#407088"
      />
    </>
  );
};

export default MenuFab;
