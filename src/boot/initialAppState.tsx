import { IInitialAppStateType } from '../types';

export const initialAppState: IInitialAppStateType = {
  config: {},
  loader: {
    enabled: true,
    level: 0,
    chunks: ['CHUNK_CONFIG'],
  },
  homeItems: {},
  loading: {
    category: 'fullPageLoader',
    chunks: 11,
  },
  app: {
    loading: true,
  },
  view: {
    loading: false,
  },
  authentication: {
    authenticated: false,
  },
};
