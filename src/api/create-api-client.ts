import axios, { AxiosInstance, AxiosRequestConfig, AxiosError, AxiosPromise } from 'axios';
import Sequelize from '../core/Sequelize';
import { getStorage } from '@/core/storage';

interface CreateAPIOptions {
  instance: AxiosInstance;
}

export const createAPI = (options: CreateAPIOptions) => {
  const instance = axios.create({
    baseURL: process.env.BASE_API_URL as string,
    timeout: process.env.AJAX_TIMEOUT as number | undefined,
  });
  
  instance.interceptors.request.use(
    ((config: AxiosRequestConfig): AxiosRequestConfig => {
      const token = getStorage('token');
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
  return new Sequelize({}, instance);
};

