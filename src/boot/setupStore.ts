import { applyMiddleware, combineReducers, createStore, Store } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { IInitialAppStateType } from '../types';
import { configReducer } from '../store/configActionsReducer';
import { loadingReducer } from '../store/loadingActionsReducer';
import { appReducer } from '../store/appActionsReducer';
import { viewReducer } from '../store/viewActionsReducer';
import { authenticationReducer } from '../store/authActionsReducer';
import { loaderReducer } from '../store/loaderActionsReducer';
import { homeItemsReducer } from '../store/homeItemsActionReducer';

export const setupStore = (config: any): Store<IInitialAppStateType> => {
  const middlewares = [thunkMiddleware, createLogger()];
  const middlewareEnhancer = composeWithDevTools(
    applyMiddleware(...middlewares)
  );
  const rootReducer = combineReducers<IInitialAppStateType>({
    config: configReducer,
    loader: loaderReducer,
    homeItems: homeItemsReducer,
    loading: loadingReducer,
    app: appReducer,
    view: viewReducer,
    authentication: authenticationReducer,
  });
  return createStore(rootReducer, config, middlewareEnhancer);
};
