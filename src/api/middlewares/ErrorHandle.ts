/*
 * @Author: cys
 * @Date: 2018-11-20 16:27:06
 * @Last Modified by: cys
 * @Last Modified time: 2018-12-06 14:39:53
 * @description: 异常处理
 */

import { catchError, mergeMap } from 'rxjs/operators';
import { empty, ObservableInput, OperatorFunction, Operator, of } from 'rxjs';

export interface Configuration {
  selector?: (res: any) => ObservableInput<any>;
  dispatch?: (err?: any) => any;
}

export interface ErrorHandleOptions {
  selector: (res: any) => ObservableInput<any>;
  dispatch: (err?: any) => any;
}

export interface ErrorHandleInterface {
  handle: () => Operator<any, any>;
  options: ErrorHandleOptions;
}


const defaultOptions: ErrorHandleOptions = {
  selector(err: Error) {
    const context: ErrorHandleInterface = this as any;
    try {
      const errObject = JSON.parse(err.message);
      context.options.dispatch(errObject);
    } catch (error) {
      context.options.dispatch();
    }
    return empty();
  },
  dispatch(err) {
    return this;
  }, // dispatch errors
};

class ErrorHandle implements ErrorHandleInterface {
  public selector: (res: any) => ObservableInput<any>;
  public options: ErrorHandleOptions;
  constructor(options: Configuration = {}) {
    this.options = {
      ...defaultOptions,
      ...options,
    };
    this.selector =  this.options.selector;
  }
  public handle() {
    return catchError(this.selector.bind(this));
  }
}

export default ErrorHandle;
