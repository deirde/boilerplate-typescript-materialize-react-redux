import { getCookie } from '../utils/cookiesUtil';

interface IConfigType {
  features: any;
  services: any;
}

export class configClient {
  private static instance: configClient;
  public environment: string = getCookie('CONFIG_ENVIRONMENT') || 'DEV';
  public territory: string = getCookie('CONFIG_TERRITORY') || 'UK';
  public config: IConfigType = {
    features: {},
    services: {},
  };
  public pollConfigTimeoutValue = 1000 * 60 * 1;

  private _requestParams(): string {
    const _urls: { [key: string]: string } = {
      DEV: 'http://116.203.142.6:9001/config',
      PROD: '',
    };
    return _urls[this.environment];
  }

  public _request = new Request(this._requestParams(), {
    method: 'GET',
  });

  public pollConfig(): void {
    setTimeout(function pollConfig() {
      fetch(configClient.instance._request)
        .then((response) => response.json())
        .then((payload) => (configClient.instance.config = payload));
      setTimeout(pollConfig, configClient.instance.pollConfigTimeoutValue);
    });
  }

  public static getInstance(): configClient {
    if (!configClient.instance) {
      configClient.instance = new configClient();
    }
    return configClient.instance;
  }
}

export const getEnvironment = (): string => {
  return configClient.getInstance().environment;
};

export const getTerritory = (): string => {
  return configClient.getInstance().territory;
};

export const getFeature = (feature: string): IConfigType => {
  return configClient.getInstance().config.features[feature];
};

export const getConfig = (): object => {
  return configClient.getInstance().config;
};

export async function fetchConfig(): Promise<void> {
  await fetch(configClient.getInstance()._request)
    .then((response) => response.json())
    .then((payload) => (configClient.getInstance().config = payload))
    .catch((e) => {
      throw e;
    });
}
