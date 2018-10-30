import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    activetabbar: 'home',
    isHasReturnBtn: false,
    cart: JSON.parse(window.localStorage.getItem('blsh-cart')) || []
  },
  mutations: {
    changeTabbar(state,name) {
      state.activetabbar = name
    },
    changeIsHasReturnBtn(state,bool) {
      state.isHasReturnBtn = bool;
    },
    addToCart(state,data) {
      //判断商品是否存在在购物车中
      const isInCart =  state.cart.some( item => item.id === data.id);
      if(isInCart) {
        state.cart.map(item => {
          if(item.id === data.id){
            item.count += 1
          }
        })
      }else{
        state.cart.push({...data,count:1})
      }

      //将数据存储打牌webStorage中
      window.localStorage.setItem('blsh-cart',JSON.stringify(state.cart));
    }
  },
});