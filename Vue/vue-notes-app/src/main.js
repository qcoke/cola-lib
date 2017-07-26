// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
// import App from './App';
import VueRouter from 'vue-router';
import Home from '@/components/Home.vue';
import About from '@/components/About';

Vue.use(VueRouter);
Vue.config.productionTip = false

// 创建好两个组件
const routes = [
	{path:'/home',component: Home},
	{path:'/about',component: About}
]
const router = new VueRouter({
	routes :routes
});

const app = new Vue({
  el:'#app',
  router
});