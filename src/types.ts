export interface IInitialAppStateType {
  app: IAppType;
  authentication: IAuthenticationType;
  config: IConfigType;
  loader: ILoaderType;
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
  chunks: [any];
}

export interface ILoadingType {
  chunks?: number;
  category?: 'initialLoader' | 'fullPageLoader' | 'inPageLoader';
}

export interface IViewType {
  loading: boolean;
}
