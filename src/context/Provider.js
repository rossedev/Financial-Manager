import {collection, onSnapshot, query} from 'firebase/firestore';
import {createContext, useContext, useEffect, useMemo, useReducer} from 'react';
import {database} from '../config/fb';
import {setAccountAction} from './Actions';
import {Reducer} from './Reducer';

const initialState = {
  account: [],
  isNewRegister: false,
  toggleThemeDefault: true,
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
