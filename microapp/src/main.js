import Vue from 'vue';
import App from './App.vue';

import './public-path';

Vue.config.productionTip = false;

import VueRouter from 'vue-router';
import routes from './routes';

Vue.config.productionTip = false;
let router = null;
let instance = null;

function render(props = {}) {
  const {container} = props;
  router = new VueRouter({
    // base: window.__POWERED_BY_QIANKUN__ ? '/app/vue/' : '/',
    // mode: 'history',
    routes,
  });

  // 判断 qiankun 环境则进行路由拦截，判断跳转路由是否有 /micro 开头前缀，没有则加上
  // if (window.__POWERED_BY_QIANKUN__) {
  //   router.beforeEach((to, from, next) => {
  //     console.log('router.beforeEach', to, from);
  //     if (!to.path.includes('/app')) {
  //       next({
  //         path: '/app/vue' + to.path,
  //       });
  //     } else {
  //       next();
  //     }
  //   });
  // }
  instance = new Vue({
    router,
    render: h => h(App),
  }).$mount(container ? container.querySelector('#microapp') : '#microapp');
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

async function test(){
  return Promise.resolve("test");
}

export async function bootstrap() {
  const t = await test();
  console.log('[vue] vue app bootstraped',t);
}

export async function mount(props) {
  console.log('[vue] props from main framework', props);
  render(props);
}

export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = '';
  instance = null;
  router = null;
}
