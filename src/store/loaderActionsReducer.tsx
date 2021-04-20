import { AnyAction } from 'redux';
import { ILoaderType } from '../types';
import { initialAppState } from '../boot/initialAppState';

export const loaderReducer = (
  state = initialAppState.loader,
  action: AnyAction
): ILoaderType => state;
