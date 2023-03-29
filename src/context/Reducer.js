export const Reducer = (state, action) => {
  switch (action.type) {
    case ActionName.SET_ACCOUNT:
      return {...state, account: action.payload.account};
    case ActionName.SET_IS_NEW_REGISTER:
      return {...state, isNewRegister: action.payload.isNewRegister};
    case ActionName.SET_TOGGLE_THEME_DEFAULT:
      return {...state, toggleThemeDefault: action.payload.toggleThemeDefault};

    default:
      return state;
  }
};

export const ActionName = {
  SET_ACCOUNT: 'SET_ACCOUNT',
  SET_IS_NEW_REGISTER: 'SET_IS_NEW_REGISTER',
  SET_TOGGLE_THEME_DEFAULT: 'SET_TOGGLE_THEME_DEFAULT',
};
