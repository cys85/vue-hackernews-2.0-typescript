/*
 * @Author: cys
 * @Date: 2018-11-20 16:23:46
 * @Last Modified by: cys
 * @Last Modified time: 2018-12-06 14:38:27
 * @description: 异常捕获
 */
import { tap, map } from 'rxjs/operators';
import { AxiosResponse } from 'axios';
// import { EventBus } from 'feok-lib';

interface SelectorResult {
  result: 'success' | 'error';
  message: string | number;
}

export interface Configuration {
  selector?: (res: AxiosResponse) => void;
}

const switchErrors = (code: number, message: string) => {
  switch (code) {
    case 502:
      return {
        code: 502,
        result: 'error',
        message: '服务器异常，请稍后再试',
      };
    // case 401:
    //   EventBus.$emit('loginInvalid');
    //   break;
    default:
      return {
        code,
        result: 'error',
        message,
      };
  }
};


const defaultOptions: Configuration = {
  selector(res) {
    const code = res.data.code || -1;
    if (code * 1 !== 100000) {
      const _res = switchErrors(code, res.data.message);
      throw new Error(JSON.stringify(_res));
    }
  },
};

class ErrorCatcher {
  public selector: undefined | ((res: AxiosResponse) => void);
  private options: Configuration = {};
  constructor(options?: Configuration) {
    this.options = {
      ...defaultOptions,
      ...options,
    };
    this.selector =  this.options.selector;
  }
  public catch() {
    return tap(this.selector);
  }
}
export default ErrorCatcher;
