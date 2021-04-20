import { AnyAction } from 'redux';
import { IConfigType } from '../types';
import { initialAppState } from '../boot/initialAppState';
import { Dispatch } from 'react';
import { configClient } from '../boot/configClient';
import { unsetLoading } from './appActionsReducer';

enum ConfigActions {
  UPDATE_CONFIG = 'UPDATE_CONFIG',
}

const updateConfig = (config: IConfigType) => {
  return {
    type: ConfigActions.UPDATE_CONFIG,
    config: config,
  };
};

export const initPollConfig = () => {
  return (dispatch: Dispatch<any>) => {
    setTimeout(function handlePollConfig() {
      fetch(configClient.getInstance()._request)
        .then((response) => response.json())
        .then((payload) => {
          dispatch(updateConfig({ config: payload }));
          dispatch(unsetLoading());
        });
      setTimeout(
        handlePollConfig,
        configClient.getInstance()._pollConfigTimeoutValue
      );
    });
  };
};

export const configReducer = (
  state = initialAppState.config,
  action: AnyAction
): IConfigType => {
  if (action.config) {
    return {
      ...state,
      ...action.config.config,
    };
  }
  return state;
};
