import Vue from 'vue';
import 'es6-promise/auto';
import { createApp } from './app';
import ProgressBar from './components/ProgressBar.vue';

// global progress bar
const bar: any = Vue.prototype.$bar = new Vue(ProgressBar).$mount();
document.body.appendChild(bar.$el);

// a global mixin that calls `asyncData` when a route component's params change
Vue.mixin({
  beforeRouteUpdate(to: any, from: any, next: any) {
    const { asyncData } = (this as any).$options;
    if (asyncData) {
      asyncData({
        store: (this as any).$store,
        route: to,
      }).then(next).catch(next);
    } else {
      next();
    }
  },
});

const { app, router, store }: any = createApp();

// prime the store with server-initialized state.
// the state is determined during SSR and inlined in the page markup.
if (window.__INITIAL_STATE__) {
  store.replaceState(window.__INITIAL_STATE__);
}

// wait until router has resolved all async before hooks
// and async components...
router.onReady(() => {
  // Add router hook for handling asyncData.
  // Doing it after initial route is resolved so that we don't double-fetch
  // the data that we already have. Using router.beforeResolve() so that all
  // async components are resolved.
  router.beforeResolve((to: any, from: any, next: any) => {
    const matched = router.getMatchedComponents(to);
    console.log('matched: ', matched);
    const prevMatched = router.getMatchedComponents(from);
    console.log('prevMatched: ', prevMatched);
    let diffed = false;
    const activated = matched.filter((c: any, i: any) => {
      console.log(prevMatched[i].cid, c.cid);
      return diffed || (diffed = (prevMatched[i] !== c ));
    });
    console.log('activated: ', activated);

    const asyncDataHooks = activated.map((c: any) => (new c()).$options.asyncData).filter((_: any) => _);
    console.log('asyncDataHooks: ', asyncDataHooks);
    if (!asyncDataHooks.length) {
      return next();
    }

    bar.start();
    Promise.all(asyncDataHooks.map((hook: any) => hook({ store, route: to })))
      .then(() => {
        bar.finish();
        next();
      })
      .catch(next);
  });

  // actually mount to DOM
  app.$mount('#app');
});

// service worker
if ('https:' === location.protocol && navigator.serviceWorker) {
  navigator.serviceWorker.register('/service-worker.js');
}
