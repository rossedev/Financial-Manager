import moment from 'moment';
import React from 'react';
import {ScrollView} from 'react-native';
import {Button, Card, Chip, Text} from 'react-native-paper';
import {formatCurrency} from '../utils/formatCurrency';
import EditRegister from './EditRegister';
import RemoveRegister from './RemoveRegister';
import useDetailRegisters from './useDetailRegisters';

const DetailRegisters = () => {
  const {
    infoRemove,
    formEdit,
    showConfirmRemoveModal,
    modalEdit,
    newAccount,
    submitRemove,
    onClickDelete,
    submitEdit,
    changeEdit,
    onClickEdit,
    onCloseEditModal,
    onCloseRemoveModal,
    searchToName,
    filterCurrenly,
  } = useDetailRegisters();

  return (
    <>
      <EditRegister
        formEdit={formEdit}
        modalEdit={modalEdit}
        onCloseEditModal={onCloseEditModal}
        changeEdit={changeEdit}
        submitEdit={submitEdit}
      />

      <RemoveRegister
        infoRemove={infoRemove}
        showConfirm={showConfirmRemoveModal}
        onCloseRemoveModal={onCloseRemoveModal}
        submitRemove={submitRemove}
      />

      <ScrollView>
        {newAccount.map((item, index) => (
          <Card key={index} style={{margin: 10}}>
            <Card.Title
              title={
                item.type === 'ingreso' ? (
                  <Chip
                    theme={{
                      colors: {
                        primary: 'white',
                        secondaryContainer: '#86efac',
                        onSecondaryContainer: 'white',
                      },
                    }}
                    icon="plus-circle-outline">
                    Ingreso
                  </Chip>
                ) : (
                  <Chip
                    icon="minus-circle-outline"
                    theme={{
                      colors: {
                        primary: 'white',
                        secondaryContainer: '#fca5a5',
                        onSecondaryContainer: 'white',
                      },
                    }}>
                    Egreso
                  </Chip>
                )
              }
              right={() => (
                <Text style={{paddingRight: 15}}>
                  {moment(item.date).format('LL').toString()}
                </Text>
              )}
            />
            <Card.Content>
              <Text variant="titleLarge">
                {formatCurrency(parseInt(item.value))}
              </Text>
              <Text variant="bodyMedium">{item.concept}</Text>
            </Card.Content>
            <Card.Actions>
              <Button
                mode="text"
                compact
                onPress={() => {
                  onClickDelete(item);
                }}>
                Delete
              </Button>
              <Button
                mode="text"
                compact
                onPress={() => {
                  onClickEdit(item);
                }}>
                Edit
              </Button>
            </Card.Actions>
          </Card>
        ))}
      </ScrollView>
    </>
  );
};

export default DetailRegisters;