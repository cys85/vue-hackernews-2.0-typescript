import {namespace} from 'store2';
import _Cookies from 'js-cookie';

const _storage: any = namespace(process.env.STORAGE_NAMESPACE)

export const Cookies = _Cookies;

export type setStorageInterface = (key: string, value: string) => void;

export type getStorageInterface = (key: string) => string;

/**
 * 补丁方案： 解决微信端在部分机型下 localstorage 无法长期存储的bug
 *
 * @param {any} key
 * @param {any} value
 */
export const setStorage: setStorageInterface = (key: string, value: string) => {
  Cookies.set(key, value, { expires: 365 });
  _storage.set(key, value);
};

/**
 *  * 补丁方案： 解决微信端在部分机型下 localstorage 无法长期存储的bug
 *
 * @param {any} key
 * @returns
 */
export const getStorage: getStorageInterface = (key: string): string => {
  if (_storage.get(key)) {
    return _storage.get(key);
  }
  if (Cookies.get(key)) {
    try {
      return JSON.parse(Cookies.get(key));
    } catch (error) {
      return Cookies.get(key);
    }
  }
  return '';
};


/**
 * 存储token
 * @param {string} token - 要存储的token
 */
export const saveTokenToLocal = (token: string, tokenKey = 'token'): void => {
  if (process.env.TOKEN_PATTERN === 'session') {
    _storage.session.set(tokenKey, token);
  } else {
    _storage.set(tokenKey, token);
  }
};

/**
 * 删除token
 */
export const deleteTokenFormLocal = (tokenKey = 'token'): void => {
  if (process.env.TOKEN_PATTERN === 'session') {
    _storage.session.remove(tokenKey);
  } else {
    _storage.remove(tokenKey);
  }
};

export const getTokenFormLocal = (tokenKey = 'token') => {
  if (process.env.TOKEN_PATTERN === 'session') {
    return _storage.session.get(tokenKey);
  } else {
    return _storage.get(tokenKey);
  }
};


export default _storage;
