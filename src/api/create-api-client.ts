import { AxiosInstance } from 'axios';
import Sequelize from '../core/Sequelize';

interface CreateAPIOptions {
  instance: AxiosInstance;
}

export const createAPI = (options: CreateAPIOptions) => {
  return new Sequelize({}, options.instance);
};

