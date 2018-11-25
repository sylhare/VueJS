import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'
import router from './router'

Vue.use(VueResource);
Vue.config.productionTip = false

// Will intercept the "GET" request, not the "GET" response
Vue.http.interceptors.push(function(request) {
  // modify method the intercepted method into
  // request.method = 'GET';

  // modify request headers
  request.headers.set('X-CSRF-TOKEN', 'TOKEN');
  request.headers.set('Authorization', 'Bearer TOKEN');
  request.headers.set('Test', 'test');

});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
