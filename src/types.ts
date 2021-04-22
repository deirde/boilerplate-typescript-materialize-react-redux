export interface IInitialAppStateType {
  config: IConfigType;
  loader: ILoaderType;
  homeItems: IHomeItemsType;
  app: IAppType;
  authentication: IAuthenticationType;
  loading: ILoadingType;
  view: IViewType;
}

export interface IAppType {
  loading: boolean;
}

export interface IAuthenticationType {
  authenticated: boolean;
  username?: string;
}

export interface IConfigType {
  config?: {
    environment: string;
    territory: string;
    features: any;
    services: any;
  };
}

export interface ILoaderType {
  enabled: boolean;
  level: 0 | 1 | 2;
  chunks: string[];
}

export interface IHomeItemsType {
  [key: string]: IHomeItemType;
}

interface IHomeItemType {
  id: any;
}

export interface ILoadingType {
  chunks?: number;
  category?: 'initialLoader' | 'fullPageLoader' | 'inPageLoader';
}

export interface IViewType {
  loading: boolean;
}

export interface IInternalComponentStateFieldType {
  internalComponentStateField: string;
}
