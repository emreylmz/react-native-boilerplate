import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  CancelTokenStatic,
} from 'axios';
// import TokenRequestInterceptor from 'api/interceptors/TokenRequestInterceptor';
// import TokenResponseInterceptor from 'api/interceptors/TokenResponseInterceptor';

export interface HttpClientOptions {
  requestInterceptors?: any[];
  responseInterceptors?: any[];
  injectTokenHeaderRequestInterceptor?: boolean;
  injectTokenRefreshResponseInterceptor?: boolean;
  [key: string]: any;
}

export default class HttpClient {
  axios: AxiosInstance;
  CancelToken: CancelTokenStatic;

  constructor(baseURL: string, options: HttpClientOptions) {
    const {
      requestInterceptors = [],
      responseInterceptors = [],
      injectTokenHeaderRequestInterceptor = true,
      injectTokenRefreshResponseInterceptor = true,
      headers = {},
      ...rest
    } = options;

    this.CancelToken = axios.CancelToken;

    this.axios = axios.create({
      baseURL,
      headers,
      ...rest,
    });

    if (injectTokenHeaderRequestInterceptor) {
      // const tokenRequestInterceptor = new TokenRequestInterceptor();
      // this.axios.interceptors.request.use(
      //   conf => tokenRequestInterceptor.onFulfilled(conf),
      //   error => tokenRequestInterceptor.onRejected(error),
      // );
    }

    if (injectTokenRefreshResponseInterceptor) {
      // const tokenResponseInterceptor = new TokenResponseInterceptor();
      // this.axios.interceptors.response.use(
      //   conf => tokenResponseInterceptor.onFulfilled(conf),
      //   error => tokenResponseInterceptor.onRejected(error),
      // );
    }

    requestInterceptors.forEach(interceptorConfig => {
      this.axios.interceptors.request.use(
        conf => interceptorConfig.onFulfilled(conf, this.axios),
        error => interceptorConfig.onRejected(error, this.axios),
      );
    });

    responseInterceptors.forEach(interceptorConfig => {
      this.axios.interceptors.response.use(
        conf => interceptorConfig.onFulfilled(conf, this.axios),
        error => {
          if (error.message === 'Retried request') {
            return Promise.reject(error);
          }
          return interceptorConfig.onRejected(error, this.axios);
        },
      );
    });
  }

  async get(
    path: string,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse> {
    return this.axios.get(path, options);
  }

  async post(
    path: string,
    data: any,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse> {
    return this.axios.post(path, data, options);
  }

  async put(
    path: string,
    data: any,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse> {
    return this.axios.put(path, data, options);
  }

  async patch(
    path: string,
    data: any,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse> {
    return this.axios.patch(path, data, options);
  }

  async delete(
    path: string,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse> {
    return this.axios.delete(path, options);
  }

  getAxiosInstance(): AxiosInstance {
    return this.axios;
  }

  static isCancel(error: any): boolean {
    return axios.isCancel(error);
  }
}
