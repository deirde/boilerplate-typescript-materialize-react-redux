import { AnyAction } from 'redux';
import { Dispatch } from 'react';
import { initialAppState } from '../boot/initialAppState';
import { IHomeItemsType } from '../types';
import { configGetService } from '../boot/configClient';

enum HomeItemsActions {
  HOME_ITEMS_LOAD = 'HOME_ITEMS_LOAD',
}

enum HomeItemsEndpointKeys {
  HOME_ITEMS = 'homeItems',
}

const homeItemsLoad = (payload: IHomeItemsType) => {
  return {
    type: HomeItemsActions.HOME_ITEMS_LOAD,
    payload,
  };
};

export const actionHomeItemsLoad = () => {
  return (dispatch: Dispatch<any>) => {
    const request = new Request(
      configGetService(HomeItemsEndpointKeys.HOME_ITEMS),
      {
        method: 'GET',
      }
    );
    fetch(request)
      .then((response) => response.json())
      .then((payload) => dispatch(homeItemsLoad(payload)));
  };
};

export const homeItemsReducer = (
  state = initialAppState.homeItems,
  action: AnyAction
): IHomeItemsType => {
  switch (action.type) {
    case HomeItemsActions.HOME_ITEMS_LOAD:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
