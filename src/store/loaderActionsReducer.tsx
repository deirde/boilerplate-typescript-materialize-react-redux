import { AnyAction } from 'redux';
import { Dispatch } from 'react';
import { ILoaderType } from '../types';
import { initialAppState } from '../boot/initialAppState';

enum LoaderActions {
  LOADER_SET_ENABLED = 'LOADER_SET_ENABLED',
  LOADER_SET_LEVEL = 'LOADER_SET_LEVEL',
  LOADER_SET_CHUNKS = 'LOADER_SET_CHUNKS',
  LOADER_ADD_CHUNK = 'LOADER_ADD_CHUNK',
  LOADER_REMOVE_CHUNK = 'LOADER_REMOVE_CHUNK',
  LOADER_CLEAN_CHUNKS = 'LOADER_CLEAN_CHUNKS',
}

export enum LoaderChunks {
  CHUNK_CONFIG = 'CHUNK_CONFIG',
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

const loaderAddChunk = (payload: string) => {
  return {
    type: LoaderActions.LOADER_ADD_CHUNK,
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

export const actionLoaderAddChunk = (payload: string) => {
  return (dispatch: Dispatch<any>) => {
    dispatch(loaderAddChunk(payload));
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
      if (action.paylod < state.level) {
        return {
          ...state,
          level: action.payload,
        };
      }
      return state;
    case LoaderActions.LOADER_SET_CHUNKS:
      return {
        ...state,
        chunks: action.payload,
      };
    case LoaderActions.LOADER_ADD_CHUNK:
      if (state.chunks.indexOf(action.payload) < 0) {
        let chunks = [...state.chunks, action.payload];
        let level = chunks.length > 0 ? 1 : state.level;
        let enabled = !Boolean(state.chunks.length);
        return {
          ...state,
          level,
          enabled,
          chunks,
        };
      }
      return state;
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
