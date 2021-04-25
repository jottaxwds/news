import axios from 'axios';

const BASE_CONFIG = {
  baseURL: '',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
};

/**
 * It receives the client configuration as instance params
 * provides all needed methods for making REST requests
 */
class RESTClient { // eslint-disable-line fp/no-class
  constructor(config = {}) {
    this.client = axios.create({
      ...BASE_CONFIG,
      ...config,
    });
  }

  get(url = '', config = {}) {
    return this.client.get(url, config);
  }

  delete(url = '', config = {}) {
    return this.client.delete(url, config);
  }

  post(url = '', data, config = {}) {
    return this.client.post(url, data, config);
  }

  put(url = '', data, config = {}) {
    return this.client.put(url, data, config);
  }

  patch(url = '', data, config = {}) {
    return this.client.patch(url, data, config);
  }
}

export default RESTClient;
