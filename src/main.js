import Vue from 'vue'
import vuex from 'vuex'
import App from './App'
import router from './router'

Vue.config.productionTip = false
Vue.use(vuex)

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
