import {ActionName} from './Reducer';

export const setAccountAction = account => ({
  type: ActionName.SET_ACCOUNT,
  payload: {account},
});

export const setIsNewRegister = isNewRegister => ({
  type: ActionName.SET_IS_NEW_REGISTER,
  payload: {isNewRegister},
});
