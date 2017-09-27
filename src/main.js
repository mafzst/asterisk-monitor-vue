// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Asterisk from './plugins/AsteriskPlugin'

Vue.use(Asterisk, {host: '192.168.1.11', port: 5038, username: 'hello', password: 'world'})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
