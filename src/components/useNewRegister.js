import {useEffect, useState} from 'react';
import {useToast} from 'native-base';
import {addDoc, collection} from 'firebase/firestore';
import {database} from '../config/fb';
import AlertBase from './AlertBase';
import {setIsNewRegister} from '../context/Actions';
import {useAppContext} from '../context/Provider';

const DEFAUlT_FORM = {
  concept: '',
  date: new Date(),
  owner: 'Rosa Morales',
  type: '',
  value: 0,
};

const useNewRegister = () => {
  const toast = useToast();
  const {state, dispatch} = useAppContext();
  const [modalVisible, setModalVisible] = useState(false);
  const [form, setForm] = useState(DEFAUlT_FORM);

  useEffect(() => {
    if (state.isNewRegister) {
      setModalVisible(true);
      dispatch(setIsNewRegister(false));
    }
  }, [state.isNewRegister]);

  const changeView = value => {
    if (!value) {
      _cleanForm();
    }
    setModalVisible(value);
  };

  const onChangeForm = (value, name) => {
    setForm({
      ...form,
      [name]: value,
    });
  };

  const _cleanForm = () => {
    setForm(DEFAUlT_FORM);
  };

  const addRegister = () => {
    addDoc(collection(database, 'accounts'), form)
      .then(() => {
        _cleanForm();
        toast.show({
          render: () => {
            return <AlertBase text="Add register succesfully" />;
          },
        });
      })
      .catch(() => {
        toast.show({
          render: () => {
            return (
              <AlertBase
                text="Error, please contact with ADMIN"
                status="error"
              />
            );
          },
        });
      });
  };

  return {
    form,
    modalVisible,
    changeView,
    onChangeForm,
    addRegister,
  };
};

export default useNewRegister;
