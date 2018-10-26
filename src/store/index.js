import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vue.Store({
  strict: true,
  state: {
    cart: [
      {
        id: 1,
        title: 'mango',
        price: 12,
        count: 10
      },
      {
        id: 2,
        title: 'apple',
        price: 12,
        count: 10
      }
    ]
  }
});