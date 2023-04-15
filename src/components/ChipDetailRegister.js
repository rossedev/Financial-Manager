import {Chip} from 'react-native-paper';

const ChipDetailRegister = ({
  nameOfFilter = '',
  disabledFilter = false,
  showName = '',
  onChangeFilter,
}) => {
  return (
    <Chip
      style={{height: 32}}
      icon={nameOfFilter ? 'close' : 'information'}
      showSelectedOverlay={nameOfFilter ? 'flat' : 'outline'}
      selected={nameOfFilter}
      onPress={onChangeFilter}
      elevated={nameOfFilter ? 'flat' : 'outline'}
      disabled={!!disabledFilter}
      compact>
      {showName}
    </Chip>
  );
};

export default ChipDetailRegister;
