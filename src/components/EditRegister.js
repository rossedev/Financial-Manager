import React from 'react';
import {Button, Card, Modal, Portal, TextInput} from 'react-native-paper';

const EditRegister = ({
  formEdit,
  modalEdit,
  onCloseEditModal,
  changeEdit,
  submitEdit,
}) => {
  const containerStyle = {padding: 10};

  return (
    <Portal>
      <Modal
        visible={modalEdit}
        onDismiss={onCloseEditModal}
        contentContainerStyle={containerStyle}>
        <Card style={{padding: 5}}>
          <Card.Title
            title="Edit register"
            titleVariant="titleLarge"
            style={{marginBottom: 20}}
          />
          <Card.Content>
            <TextInput
              value={formEdit.concept}
              onChangeText={e => changeEdit(e, 'concept')}
              label="Concept"
              style={{marginBottom: 20}}
            />
            <TextInput
              keyboardType="numeric"
              value={formEdit.value}
              onChangeText={e => changeEdit(e, 'value')}
              label="Value"
              style={{marginBottom: 20}}
            />
          </Card.Content>
          <Card.Actions>
            <Button onPress={submitEdit} mode="contained">
              Edit
            </Button>
            <Button mode="contained-tonal" onPress={onCloseEditModal}>
              Cancel
            </Button>
          </Card.Actions>
        </Card>
      </Modal>
    </Portal>
  );
};

export default EditRegister;
