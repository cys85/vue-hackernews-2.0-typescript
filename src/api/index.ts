import ErrorCatcher from './middlewares/ErrorCatcher';
import ErrorHandle from './middlewares/ErrorHandle';
import EventBus from '../core/event-bus';
import Filter from './middlewares/Filter';
import { createAPI } from 'create-api';
import axios, { AxiosRequestConfig, AxiosError, AxiosPromise } from 'axios';
import {get} from 'lodash';

const instance = axios.create({
  baseURL: process.env.BASE_API_URL as string,
  timeout: process.env.AJAX_TIMEOUT as number | undefined,
});

instance.interceptors.request.use(
  ((config: AxiosRequestConfig): AxiosRequestConfig => {
    if(get(config, 'params.__cookies__.token')) {
      config.headers.token = config.params.__cookies__.token;
    }
    delete config.params.__cookies__;
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


export const filter = (new Filter({
  chain: 'data.result',
})).run();


const API_TEST = 'http://rap2api.taobao.org/app/mock/120014/web/purchase/purchaseinorder'


export const getTest = app.get(API_TEST, errorCatcher, errorHandle, filter)