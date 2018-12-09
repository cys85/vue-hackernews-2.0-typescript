declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}


declare var System: any;

declare var require: {
  <T>(path: string): T;
  (paths: string[], callback: (...modules: any[]) => void): void;
  ensure: (paths: string[], callback: (require: <T>(path:string) => T) => void) => void;
};

declare var process: {
  env: {
    NODE_ENV: any,
    VUE_ENV: any,
    DEBUG_API: any
    BASE_API_URL: any,
    AJAX_TIMEOUT: any,
    TOKEN_PATTERN: any,
    STORAGE_NAMESPACE: any
  },
  __API__: any
}

interface Window {
  __INITIAL_STATE__: any;
}

declare module "create-api"
