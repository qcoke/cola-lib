// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import router from './router'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// Vue.config.productionTip = false
const Home = {template:"<div>home page</div>"};
const About = {template:"<div>about page</div>"};
const User = {template:"<div>User page</div>"};
const router = new VueRouter({
	routes :[
	  { path: '/home', component:Home},
	  { path: '/about', component:About},
	  { path: '/user/:id',name:'user',component:User},
	  { path: '/', redirect: '/home'}
	]
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  router:router,
  components: { App }
})
