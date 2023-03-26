import {
  Button,
  Dialog,
  Portal,
  RadioButton,
  TextInput,
} from 'react-native-paper';
import useNewRegister from './useNewRegister';

const AddRegister = () => {
  const {form, modalVisible, changeView, onChangeForm, addRegister} =
    useNewRegister();

  return (
    <Portal>
      <Dialog visible={modalVisible} onDismiss={() => changeView(false)}>
        <Dialog.Title>Add register</Dialog.Title>
        <Dialog.Content>
          <TextInput
            label="Concept"
            value={form.concept}
            onChangeText={e => onChangeForm(e, 'concept')}
            style={{marginBottom: 20}}
          />

          <TextInput
            label="Value"
            value={form.value}
            onChangeText={e => onChangeForm(e, 'value')}
            keyboardType="numeric"
            style={{marginBottom: 20}}
          />

          <RadioButton.Group
            onValueChange={e => onChangeForm(e, 'type')}
            value={form.type}>
            <RadioButton.Item label="Ingreso" value="ingreso" />
            <RadioButton.Item label="Egreso" value="egreso" />
          </RadioButton.Group>
        </Dialog.Content>
        <Dialog.Actions>
          <Button
            onPress={() => {
              changeView(false);
            }}>
            Cancel
          </Button>
          <Button
            onPress={() => {
              addRegister();
              changeView(false);
            }}>
            Save
          </Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default AddRegister;
