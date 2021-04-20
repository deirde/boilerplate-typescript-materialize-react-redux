import { AnyAction } from 'redux';
import { initialAppState } from '../boot/initialAppState';
import { IAppType } from '../types';

export enum appActions {
  SET_LOADING = 'SET_LOADING',
  UNSET_LOADING = 'UNSET_LOADING',
}

export const setLoading = (loading: boolean) => {
  return {
    type: appActions.SET_LOADING,
    loading: loading,
  };
};

// export const unsetLoading = (loading: boolean) => ({
export const unsetLoading = () => ({
  type: appActions.UNSET_LOADING,
  // loading: false
});

export const appReducer = (
  state = initialAppState.app,
  action: AnyAction
): IAppType => {
  switch (action.type) {
    case appActions.SET_LOADING:
      return {
        loading: true,
      };
    case appActions.UNSET_LOADING:
      return {
        loading: false,
      };
    default:
      return state;
  }
};
