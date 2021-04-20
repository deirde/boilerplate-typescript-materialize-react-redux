import { AnyAction } from 'redux';
import { IAuthenticationType } from '../types';
import { initialAppState } from '../boot/initialAppState';
import { Dispatch } from 'react';
import { setLoading } from './viewActionsReducer';

export enum AuthenticationActions {
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT',
}

export const requestLogin = (username: string, password: string) => {
  return (dispatch: Dispatch<any>) => {
    dispatch(setLoading(true));
    authenticate(username, password).then((isSuccessfull) => {
      if (isSuccessfull) dispatch(login(username));
      else dispatch(logout());
      dispatch(setLoading(false));
    });
  };
};

export const login = (username: string) => {
  return {
    type: AuthenticationActions.LOGIN,
    username: username,
  };
};

export const logout = () => {
  return {
    type: AuthenticationActions.LOGOUT,
  };
};

const authenticate = async (username: string, password: string) => {
  await new Promise((r) => setTimeout(r, 500));
  return true;
};

export const authenticationReducer = (
  state = initialAppState.authentication,
  action: AnyAction
): IAuthenticationType => {
  switch (action.type) {
    case AuthenticationActions.LOGIN:
      return {
        username: action.username,
        authenticated: true,
      };
    case AuthenticationActions.LOGOUT:
      return {
        username: undefined,
        authenticated: false,
      };
    default:
      return state;
  }
};
