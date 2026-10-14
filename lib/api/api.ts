import axios, {
  AxiosHeaders,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from 'axios';

const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

API.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    if (typeof window === 'undefined') {
      return config;
    }

    config.headers = AxiosHeaders.from(config.headers);

    const isFormData = config.data instanceof FormData;

    if (isFormData) {
      config.headers.delete('Content-Type');
    } else if (!config.headers.has('Content-Type')) {
      config.headers.set('Content-Type', 'application/json');
    }

    const token = localStorage.getItem('token');

    if (token) {
      config.headers.set('Authorization', `Bearer ${token}`);
    }

    return config;
  }
);

API.interceptors.response.use(
  (response: AxiosResponse) => {
    if (typeof window !== 'undefined') {
      const token = response.headers['x-auth-token'];

      if (token) {
        localStorage.setItem('token', token);
      }
    }

    return response;
  },
  (error) => Promise.reject(error.response?.data ?? error)
);

export default API;
