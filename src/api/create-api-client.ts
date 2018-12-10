import axios, { AxiosInstance, AxiosRequestConfig, AxiosError, AxiosPromise } from 'axios';
import Sequelize from '../core/Sequelize';
import { getStorage } from '@/core/storage';

interface CreateAPIOptions {
  instance: AxiosInstance;
}

export const createAPI = (options: CreateAPIOptions) => {
  return new Sequelize({}, options.instance);
};

