import { AnyAction } from 'redux';
import { Dispatch } from 'react';
import { ILoaderType } from '../types';
import { initialAppState } from '../boot/initialAppState';

enum LoaderActions {
  LOADER_SET_ENABLED = 'LOADER_SET_ENABLED',
  LOADER_SET_LEVEL = 'LOADER_SET_LEVEL',
  LOADER_SET_CHUNKS = 'LOADER_SET_CHUNKS',
  LOADER_REMOVE_CHUNK = 'LOADER_REMOVE_CHUNK',
  LOADER_CLEAN_CHUNKS = 'LOADER_CLEAN_CHUNKS',
}

export enum LoaderChunks {
  CHUNK_CONFIG = 'CHUNK_CONFIG',
  CHUNK_AUTH = 'CHUNK_AUTH',
}

const loaderSetEnabled = (payload: ILoaderType['enabled']) => {
  return {
    type: LoaderActions.LOADER_SET_ENABLED,
    payload,
  };
};

const loaderSetLevel = (payload: ILoaderType['level']) => {
  return {
    type: LoaderActions.LOADER_SET_LEVEL,
    payload,
  };
};

const loaderSetChunks = (payload: ILoaderType['chunks']) => {
  return {
    type: LoaderActions.LOADER_SET_CHUNKS,
    payload,
  };
};

const loaderRemoveChunk = (payload: string) => {
  return {
    type: LoaderActions.LOADER_REMOVE_CHUNK,
    payload,
  };
};

const loaderCleanChunks = () => {
  return {
    type: LoaderActions.LOADER_CLEAN_CHUNKS,
  };
};

export const actionLoaderSetEnabled = (payload: ILoaderType['enabled']) => {
  return (dispatch: Dispatch<any>) => {
    dispatch(loaderSetEnabled(payload));
  };
};

export const actionLoaderSetLevel = (payload: ILoaderType['level']) => {
  return (dispatch: Dispatch<any>) => {
    dispatch(loaderSetLevel(payload));
  };
};

export const actionLoaderSetChunks = (payload: ILoaderType['chunks']) => {
  return (dispatch: Dispatch<any>) => {
    dispatch(loaderSetChunks(payload));
  };
};

export const actionLoaderRemoveChunk = (payload: string) => {
  return (dispatch: Dispatch<any>) => {
    dispatch(loaderRemoveChunk(payload));
  };
};

export const actionLoaderCleanChunks = () => {
  return (dispatch: Dispatch<any>) => {
    dispatch(loaderCleanChunks());
  };
};

export const loaderReducer = (
  state = initialAppState.loader,
  action: AnyAction
): ILoaderType => {
  switch (action.type) {
    case LoaderActions.LOADER_SET_ENABLED:
      return {
        ...state,
        enabled: action.payload,
      };
    case LoaderActions.LOADER_SET_LEVEL:
      return {
        ...state,
        level: action.payload,
      };
    case LoaderActions.LOADER_SET_CHUNKS:
      return {
        ...state,
        chunks: action.payload,
      };
    case LoaderActions.LOADER_REMOVE_CHUNK:
      let index = state.chunks.indexOf(action.payload);
      index > -1 && state.chunks.splice(index, 1);
      return {
        ...state,
        enabled: Boolean(state.chunks.length),
      };
    case LoaderActions.LOADER_CLEAN_CHUNKS:
      return {
        ...state,
        enabled: false,
        chunks: [],
      };
    default:
      return state;
  }
};
