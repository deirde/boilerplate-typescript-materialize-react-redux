import { AnyAction } from 'redux';
import { IViewType } from '../types';
import { initialAppState } from '../boot/initialAppState';

export enum ViewActions {
  SET_LOADING = 'SET_LOADING',
}

export const setLoading = (loading: boolean) => {
  return {
    type: ViewActions.SET_LOADING,
    loading: loading,
  };
};

export const viewReducer = (
  state = initialAppState.view,
  action: AnyAction
): IViewType => {
  return {
    loading: action.loading,
  };
};
