import React from 'react';
import {Modal, Button, Input, FormControl, Box, Select} from 'native-base';
import useNewRegister from './useNewRegister';

const AddRegister = () => {
  const {form, modalVisible, changeView, onChangeForm, addRegister} =
    useNewRegister();

  return (
    <>
      <Modal isOpen={modalVisible} onClose={() => changeView(false)}>
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>Add register</Modal.Header>
          <Modal.Body>
            <FormControl>
              <Input
                variant="underlined"
                w="100%"
                value={form.concept}
                onChangeText={e => onChangeForm(e, 'concept')}
                placeholder="Concept"
              />
            </FormControl>
            <FormControl mt="3">
              <Select
                selectedValue={form.type}
                minWidth="200"
                accessibilityLabel="Choose Type"
                placeholder="Choose Type"
                mt={1}
                onValueChange={e => onChangeForm(e, 'type')}
                variant="underlined"
                w="100%">
                <Select.Item label="Ingreso" value="ingreso" />
                <Select.Item label="Egreso" value="egreso" />
              </Select>
            </FormControl>

            <FormControl mt="3">
              <Input
                variant="underlined"
                w="100%"
                value={form.value}
                onChangeText={e => onChangeForm(e, 'value')}
                placeholder="Value"
                keyboardType="numeric"
              />
            </FormControl>

            <Box mt={2}>
              <Button.Group space={2}>
                <Button
                  variant="ghost"
                  colorScheme="blueGray"
                  onPress={() => {
                    changeView(false);
                  }}>
                  Cancel
                </Button>
                <Button
                  variant="ghost"
                  onPress={() => {
                    addRegister();
                    changeView(false);
                  }}>
                  Save
                </Button>
              </Button.Group>
            </Box>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </>
  );
};

export default AddRegister;
