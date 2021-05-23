import Config from 'react-native-config';
import HttpClient from './HttpClient';

const options = {
  injectTokenHeaderRequestInterceptor: true,
  injectTokenRefreshResponseInterceptor: true,
};

const PublicApiClient = new HttpClient(Config.API_CLIENT, {
  injectTokenHeaderRequestInterceptor: false,
  injectTokenRefreshResponseInterceptor: false,
});

const ApiClient = new HttpClient(Config.API_CLIENT, options);

export { PublicApiClient, ApiClient };
