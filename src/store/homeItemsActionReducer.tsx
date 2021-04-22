import { AnyAction } from 'redux';
import { initialAppState } from '../boot/initialAppState';
import { IHomeItemsType } from '../types';

export const homeItemsReducer = (
  state = initialAppState.homeItems,
  action: AnyAction
): IHomeItemsType => {
  return state;
};
