import Vue from 'vue';
import VueResource from 'vue-resource';
import App from './App.vue';
import router from './router';

Vue.use(VueResource);
Vue.config.productionTip = false;

new Vue({
  el: '#app',
  data: {
    httpbin: 'https://httpbin.org/',
    attributeA: 'valueA',
    attributeB: 'valueB',
  },
  router,
  render: h => h(App),
}).$mount('#app');

Vue.prototype.$httpbin = Object.freeze('https://httpbin.org/');
