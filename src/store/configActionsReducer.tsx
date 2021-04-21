import { AnyAction } from 'redux';
import { IConfigType } from '../types';
import { initialAppState } from '../boot/initialAppState';
import { Dispatch } from 'react';
import { configClient } from '../boot/configClient';
// import { unsetLoading } from './appActionsReducer';

enum ConfigActions {
  CONFIG_UPDATE = 'CONFIG_UPDATE',
}

const configUpdate = (payload: IConfigType) => {
  return {
    type: ConfigActions.CONFIG_UPDATE,
    payload,
  };
};

export const actionInitPollConfig = () => {
  return (dispatch: Dispatch<any>) => {
    setTimeout(function handlePollConfig() {
      fetch(configClient.getInstance()._request)
        .then((response) => response.json())
        .then((payload) => {
          dispatch(configUpdate(payload));
          // dispatch(unsetLoading());
        });
      setTimeout(
        handlePollConfig,
        configClient.getInstance().pollConfigTimeoutValue
      );
    });
  };
};

export const configReducer = (
  state = initialAppState.config,
  action: AnyAction
): IConfigType => {
  if (action.type === ConfigActions.CONFIG_UPDATE && action.payload) {
    return {
      ...state,
      ...action.payload,
    };
  }
  return state;
};
