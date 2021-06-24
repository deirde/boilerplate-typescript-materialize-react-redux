import { AnyAction } from 'redux';
import { ILoadingType } from '../types';
import { initialAppState } from '../boot/initialAppState';
import { Dispatch } from 'react';

enum LoadingActions {
  LOADING_SET_CATEGORY = 'LOADING_SET_CATEGORY',
  LOADING_SET_CHUNKS = 'LOADING_SET_CHUNKS',
  LOADING_DECREASE_CHUNKS = 'LOADING_DECREASE_CHUNKS',
}

const actionLoadingSetCategory = (category: string) => {
  return {
    type: LoadingActions.LOADING_SET_CATEGORY,
    category,
  };
};

const actionLoadingSetChunks = (chunks: number) => {
  return {
    type: LoadingActions.LOADING_SET_CHUNKS,
    chunks,
  };
};

const actionLoadingDecreaseChunks = () => {
  return {
    type: LoadingActions.LOADING_DECREASE_CHUNKS,
  };
};

export const handleActionLoadingSetCategory = (category: string) => {
  return (dispatch: Dispatch<any>) => {
    dispatch(actionLoadingSetCategory(category));
  };
};

export const handleActionLoadingSetChunks = (chunks: number) => {
  return (dispatch: Dispatch<any>) => {
    dispatch(actionLoadingSetChunks(chunks));
  };
};

export const handleActionLoadingDecreaseChunks = () => {
  return (dispatch: Dispatch<any>) => {
    dispatch(actionLoadingDecreaseChunks());
  };
};

export const handleActionLoadingSetCategoryAndChunks = (
  category: string,
  chunks: number
) => {
  return (dispatch: Dispatch<any>) => {
    dispatch(actionLoadingSetCategory(category));
    dispatch(actionLoadingSetChunks(chunks));
  };
};

export const loadingReducer = (
  state = initialAppState.loading,
  action: AnyAction
): ILoadingType => {
  switch (action.type) {
    case LoadingActions.LOADING_SET_CATEGORY:
      return {
        ...state,
        category: action.category,
      };
    case LoadingActions.LOADING_SET_CHUNKS:
      return {
        ...state,
        chunks: action.chunks,
      };
    case LoadingActions.LOADING_DECREASE_CHUNKS:
      if (state.chunks) {
        if (state.chunks && state.chunks <= 1) {
          return {};
        } else {
          return {
            ...state,
            chunks: state.chunks - 1,
          };
        }
      }
      return {};
    default:
      return state;
  }
};
