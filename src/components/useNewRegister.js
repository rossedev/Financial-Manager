import {addDoc, collection} from 'firebase/firestore';
import {useEffect, useState} from 'react';
import {database} from '../config/fb';
import {setIsNewRegister} from '../context/Actions';
import {useAppContext} from '../context/Provider';
import {useAlertBase} from './AlertBase';

const DEFAUlT_FORM = {
  concept: '',
  date: new Date(),
  owner: 'Rosa Morales',
  type: 'egreso',
  value: 0,
};

const useNewRegister = () => {
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
        useAlertBase('Add register succesfully');
      })
      .catch(() => {
        useAlertBase('Error, please contact with ADMIN');
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
