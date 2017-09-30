// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuetify from 'vuetify'
import VueSocketio from 'vue-socket.io'
import CxltToastr from 'cxlt-vue2-toastr'
import 'vuetify/dist/vuetify.min.css'
import 'cxlt-vue2-toastr/dist/css/cxlt-vue2-toastr.css'

Vue.use(VueAxios, axios)
Vue.use(Vuetify)
Vue.use(VueSocketio, process.env.API_BASE || 'https://asterisk-monitor.herokuapp.com')
Vue.use(CxltToastr, {
  position: 'top right',
  showDuration: 5000
})

// TODO: Better config mgmt
window.config = {
  api_base: (process.env.API_BASE || 'https://asterisk-monitor.herokuapp.com') + '/api'
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})
