import Vue from 'vue'
import vuex from 'vuex'
import App from './App'
import router from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import store from './store'
import * as ajax from './services'


Vue.prototype.$ajax = ajax;

router.beforeEach((to, from, next) => {
  next({
    params: to
  });
})

Vue.config.productionTip = false
Vue.use(vuex)
Vue.use(iView)
Vue.use(MintUI)

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
