import Cookies from 'js-cookie';

export const login = (user) => (dispatch) => {
  Cookies.set('user', user);
  dispatch({ type: 'LOGIN_SUCCESS', payload: user });
};

export const logout = () => (dispatch) => {
  Cookies.remove('user');
  dispatch({ type: 'LOGOUT' });
};
