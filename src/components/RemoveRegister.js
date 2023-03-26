import React from 'react';
import {Button, Dialog, Portal, Text} from 'react-native-paper';
import {formatCurrency} from '../utils/formatCurrency';

const RemoveRegister = ({
  infoRemove,
  showConfirm,
  onCloseRemoveModal,
  submitRemove,
}) => {
  return (
    <Portal>
      <Dialog visible={showConfirm} onDismiss={onCloseRemoveModal}>
        <Dialog.Title>Remove</Dialog.Title>
        <Dialog.Content>
          <Text variant="bodyMedium">
            Are you sure you want to delete this record?
          </Text>
          <Text
            variant="bodyMedium"
            style={{marginTop: 10, fontWeight: 'bold'}}>
            {infoRemove.concept} - {formatCurrency(parseInt(infoRemove.value))}
          </Text>
        </Dialog.Content>
        <Dialog.Actions>
          <Button
            onPress={submitRemove}
            variant="subtle"
            colorScheme="secondary"
            ml={3}>
            Delete
          </Button>
          <Button
            variant="subtle"
            colorScheme="blueGray"
            onPress={onCloseRemoveModal}>
            Cancel
          </Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default RemoveRegister;
