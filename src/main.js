import Vue from 'vue'
import vuex from 'vuex'
import App from './App'
import router from './router'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import store from './store'

router.beforeEach((to, from, next) => {
  next({
    params: to
  });
})

Vue.config.productionTip = false
Vue.use(vuex)
Vue.use(iView)

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
