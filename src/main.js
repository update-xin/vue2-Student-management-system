import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from './api'
import { showToast } from './util/toast'

// Vue.prototype.$api = api;
Vue.use((Vue)=>{
  Vue.prototype.$api = api;
})
Vue.prototype.$toast = showToast;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
