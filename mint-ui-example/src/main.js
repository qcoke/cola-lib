// import Vue from 'vue';
// import App from './app';
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';

Vue.use(MintUI);

new Vue({ // eslint-disable-line
  el: '#app',
  render: h => h(App)
});
