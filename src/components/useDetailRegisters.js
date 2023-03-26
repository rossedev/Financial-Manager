import {deleteDoc, doc, updateDoc} from 'firebase/firestore';
import moment from 'moment';
import {useEffect, useState} from 'react';
import {database} from '../config/fb';
import {useAppContext} from '../context/Provider';
import {useAlertBase} from './AlertBase';

const useDetailRegisters = () => {
  const {state} = useAppContext();
  const [newAccount, setNewAccount] = useState([]);
  const [modalEdit, setModalEdit] = useState(false);
  const [formEdit, setFormEdit] = useState({});
  const [showConfirmRemoveModal, setShowConfirmRemoveModal] = useState(false);
  const [infoRemove, setInfoRemove] = useState({});

  useEffect(() => {
    state.account.sort((a, b) => new Date(b.date) - new Date(a.date));
    setNewAccount([...state.account]);
  }, [state.account]);

  const onClickEdit = infoEdit => {
    setModalEdit(true);
    setFormEdit(infoEdit);
  };

  const changeEdit = (text, name) => {
    setFormEdit({
      ...formEdit,
      [name]: text,
    });
  };

  const submitEdit = () => {
    const docRef = doc(database, 'accounts', formEdit.id);
    updateDoc(docRef, {
      concept: formEdit.concept,
      value: formEdit.value,
    });

    useAlertBase('Successful edition');
    onCloseEditModal();
  };

  const onCloseEditModal = () => {
    setModalEdit(false);
  };

  const onClickDelete = infoRemove => {
    setInfoRemove(infoRemove);
    setShowConfirmRemoveModal(true);
  };

  const onCloseRemoveModal = () => {
    setShowConfirmRemoveModal(false);
  };

  const submitRemove = () => {
    deleteDoc(doc(database, 'accounts', infoRemove.id));
    useAlertBase('Successful remove');
    onCloseRemoveModal();
  };

  const searchToName = valueInSearch => {
    const filter = state.account.filter(e =>
      e?.concept?.toLowerCase().includes(valueInSearch.toLowerCase()),
    );
    setNewAccount(filter);
  };

  const filterCurrenly = value => {
    if (value) {
      const filter = state.account.filter(
        e => moment(e?.date).format('MM') === moment(new Date()).format('MM'),
      );
      setNewAccount(filter);
      return;
    }
    setNewAccount(account);
  };

  return {
    infoRemove,
    formEdit,
    showConfirmRemoveModal,
    modalEdit,
    newAccount,
    filterCurrenly,
    submitRemove,
    onClickDelete,
    submitEdit,
    changeEdit,
    onClickEdit,
    onCloseEditModal,
    onCloseRemoveModal,
    searchToName,
  };
};

export default useDetailRegisters;
