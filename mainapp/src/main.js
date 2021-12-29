import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import routes from './routes';

/**
 * 注册路由实例
 * 即将开始监听 location 变化，触发路由规则
 */
const router = new VueRouter({
  mode: 'history',
  routes,
});
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#main-app');
