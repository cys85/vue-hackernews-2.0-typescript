import axios, { AxiosInstance, AxiosRequestConfig, AxiosError, AxiosPromise } from 'axios';
import Sequelize from '../core/Sequelize';


interface CreateAPIOptions {
}

const SSR = global.__VUE_SSR_CONTEXT__;

export function createAPI(options: CreateAPIOptions) {
  let api: any;
  // this piece of code may run multiple times in development mode,
  // so we attach the instantiated API to `process` to avoid duplications
  if ((process as any).__API__) {
    api = (process as any).__API__;
  } else {
    const instance = axios.create({
      baseURL: process.env.BASE_API_URL as string,
      timeout: process.env.AJAX_TIMEOUT as number | undefined,
    });
    
    instance.interceptors.request.use(
      ((config: AxiosRequestConfig): AxiosRequestConfig => {
        const token = SSR.token || '';
        if (token) {
          config.headers.token = token;
        }
        return config;
      }),
      (error: AxiosError): AxiosPromise => {
        // Do something with request error
        console.log(error); // for debug
        return Promise.reject(error);
      },
    );
    api = (process as any).__API__ = new Sequelize({}, instance);
    api.onServer = true;
  }
  return api;
}
