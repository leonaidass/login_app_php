import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import { guest } from "./plugins/axios";

Vue.config.productionTip = false

new Vue({
  guest,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
