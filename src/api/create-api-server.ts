import { AxiosInstance } from 'axios';
import Sequelize from '../core/Sequelize';

interface CreateAPIOptions {
  instance: AxiosInstance
}

export function createAPI(options: CreateAPIOptions) {
  let api: any;
  // this piece of code may run multiple times in development mode,
  // so we attach the instantiated API to `process` to avoid duplications
  if ((process as any).__API__) {
    api = (process as any).__API__;
  } else {
    api = (process as any).__API__ = new Sequelize({}, options.instance);
    api.onServer = true;
  }
  return api;
}
