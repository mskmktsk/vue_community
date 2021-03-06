import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './common/antd.ui.js'
import api from './api'

Vue.prototype.$api = api
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
