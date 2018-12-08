import { Observable, OperatorFunction } from 'rxjs';

/*
 * @Author: cys
 * @Date: 2018-11-21 10:34:03
 * @Last Modified by: cys
 * @Last Modified time: 2018-11-21 10:48:47
 * @description: 过滤器
 */
import {get} from 'lodash';
import { map } from 'rxjs/operators';


interface FilterOptions {
  chain: string;
}

export interface FilterInterface {
  options: FilterOptions;
  run: (data: any) => OperatorFunction<any, any>;
}

export interface FilterConfiguration {
  chain?: string;
}

const defaultOptions = {
  chain: 'data.data',
};

class Filter implements FilterInterface {
  public options: FilterOptions;
  constructor(options: FilterConfiguration ) {
    this.options = {
      ...defaultOptions,
      ...options,
    };
  }
  public run() {
    return map((res: any) => get(res, this.options.chain, null));
  }
}
export default Filter;
