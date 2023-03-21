import {createContext, useContext, useMemo, useReducer, useEffect} from 'react';
import {collection, onSnapshot, query} from 'firebase/firestore';
import {Reducer} from './Reducer';
import {database} from '../config/fb';
import {setAccountAction} from './Actions';

const initialState = {
  account: [],
  isNewRegister: false,
};

export const Context = createContext({
  state: initialState,
  dispatch: () => {},
});

export const Provider = ({children}) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  const value = useMemo(
    () => ({
      state,
      dispatch,
    }),
    [state],
  );
  useEffect(() => {
    _getAccountList();
  }, []);

  const _getAccountList = () => {
    const collectionRef = collection(database, 'accounts');
    const q = query(collectionRef);

    const unsuscribe = onSnapshot(q, querySnapshot => {
      dispatch(
        setAccountAction(
          querySnapshot.docs.map(doc => ({
            id: doc.id,
            concept: doc.data().concept,
            value: doc.data().value,
            type: doc.data().type,
            date: doc.data().date.toDate(),
          })),
        ),
      );
      return unsuscribe;
    });
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const useAppContext = () => useContext(Context);
