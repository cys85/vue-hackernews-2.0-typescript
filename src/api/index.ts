import ErrorCatcher from './middlewares/ErrorCatcher';
import ErrorHandle from './middlewares/ErrorHandle';
import EventBus from '../core/event-bus';
import Filter from './middlewares/Filter';
import { createAPI } from 'create-api';

const app = createAPI();

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


const API_TEST = 'http://rap2api.taobao.org/app/mock/120014/web/purchase/purchaseinorder'


export const getTest = app.get(API_TEST)