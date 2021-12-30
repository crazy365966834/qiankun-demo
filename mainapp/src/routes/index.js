import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    /**
     * path: 路径为 / 时触发该路由规则
     * name: 路由的 name 为 Home
     * component: 触发路由时加载 `Home` 组件
     */
    path: '/',
    redirect: '/home',
  },
  {
    /**
     * path: 路径为 / 时触发该路由规则
     * name: 路由的 name 为 Home
     * component: 触发路由时加载 `Home` 组件
     */
    path: '/home',
    name: 'Home',
    component: () => import('../pages/home/index.vue'),
  },
  {
    /**
     * path: 路径为 / 时触发该路由规则
     * name: 路由的 name 为 Home
     * component: 触发路由时加载 `Home` 组件
     */
    path: '/test',
    name: 'Test',
    component: () => import('../pages/test/index.vue'),
  },
  {
    /**
     * path: 路径为 / 时触发该路由规则
     * name: 路由的 name 为 Home
     * component: 触发路由时加载 `Home` 组件
     */
    path: '/vue/*',
    name: 'App',
    component: () => import('../pages/app/index.vue'),
  },
  {
    /**
     * path: 路径为 / 时触发该路由规则
     * name: 路由的 name 为 Home
     * component: 触发路由时加载 `Home` 组件
     */
    path: '/aurelia/*',
    name: 'App',
    component: () => import('../pages/app/index.vue'),
  },
];

export default routes;
