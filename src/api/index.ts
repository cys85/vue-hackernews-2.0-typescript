import ErrorCatcher from './middlewares/ErrorCatcher';
import ErrorHandle from './middlewares/ErrorHandle';
import EventBus from '../core/event-bus';
import Filter from './middlewares/Filter';
import axios, { AxiosRequestConfig, AxiosError, AxiosPromise } from 'axios';
import {getStorage} from '../core/storage';
import { createAPI } from 'create-api';

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

const app = createAPI({instance});

export const errorCatcher = new ErrorCatcher().catch();
export const errorHandle = new ErrorHandle({
  dispatch(err: {
    code: number,
    message: string,
  }) {
    const {code = -1, message = '服务器异常，请稍后重试！'} = err;
    switch (code) {
      case 502:
        EventBus.$emit('error', '服务器异常，请稍后再试！');
        break;
      case 401:
        EventBus.$emit('loginInvalid');
        break;
      default:
        EventBus.$emit('error', message);
        break;
    }
  },
}).handle();


export const filter = new Filter({
  chain: 'data.result',
}).run();
