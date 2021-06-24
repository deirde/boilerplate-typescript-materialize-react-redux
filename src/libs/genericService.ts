interface IGenericService {
  params: IGenericServiceParams;
  getHeaders: Function;
  getMethod: Function;
  getCacheKey: Function;
  getData: Function;
}

interface IGenericServiceParams {
  endpoint: string;
  ttl: number;
  forceRefresh?: boolean;
}

export class genericService {
  private static instance: IGenericService;
  public params: IGenericServiceParams;
  private cacheKey: string;

  LOCAL_STORAGE = window.localStorage;
  DEFAULT_CACHE_TIME = 3600000;

  constructor(params: IGenericServiceParams) {
    this.params = params;
    this.params.ttl = this.params.ttl ?? this.DEFAULT_CACHE_TIME;
    this.params.forceRefresh = this.params.forceRefresh ?? false;
    this.cacheKey = this.getCacheKey(this.params);
  }

  getHeaders() {
    return {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
  }

  getMethod() {
    return 'GET';
  }

  getCacheKey(params: IGenericServiceParams) {
    return JSON.stringify(params);
  }

  getData() {
    let response = this.LOCAL_STORAGE.getItem(this.cacheKey);
    if (!this.params.forceRefresh && response) {
      return (async () => {
        return JSON.parse(response).value;
      })();
    } else {
      return fetch(this.params.endpoint, {
        method: this.getMethod(),
        headers: this.getHeaders(),
      })
        .then((response) => response.json())
        .then((payload) => {
          this.LOCAL_STORAGE.setItem(
            this.cacheKey,
            JSON.stringify({
              value: payload,
              expiry: new Date().getTime() + this.params.ttl,
            })
          );
          return payload;
        })
        .catch((error) => console.warn(error));
    }
  }

  public static getInstance(params: any): IGenericService {
    if (!genericService.instance) {
      genericService.instance = new genericService(params);
    }
    return genericService.instance;
  }
}
