import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    activetabbar: 'home',
    isHasReturnBtn: false,
    isListPage:false,
    cart: JSON.parse(window.localStorage.getItem('blsh-cart')) || []
  },
  getters: {
    allCount(state) {
      return state.cart.reduce((result,item) => {
        result += item.count
        return result
      },0)
    },
    allPrice(state) {
      return state.cart.reduce((result,item) => {
        result += item.count * item.price
        return result
      },0)
    }
  },
  mutations: {
    changeCartIcon(state,bool) {
      state.isListPage = bool;
    },
    changeTabbar(state,bool) {
      state.activetabbar = bool;
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
        state.cart.push({
          ...data,
          count:1,
          isChecked: true
        })
      }

      //将数据存储打牌LocalStorage中
      window.localStorage.setItem('blsh-cart',JSON.stringify(state.cart));
    },
    addCount(state,id) {
      state.cart = state.cart.map(item => {
        if(item.id === id){
          item.count += 1
        }
        return item
      })
      //将更新过后的数据重新保存到LocalStorage中
      window.localStorage.setItem('blsh-cart',JSON.stringify(state.cart))
    },
    reduceCount(state,id) {
      state.cart = state.cart.reduce((result,item) => {
        if(item.id === id){
          item.count -= 1;
        }
        if(item.count > 0){
          result.push(item)
        }
        return result
      },[])
      console.log(state.cart)
      window.localStorage.setItem('blsh-cart',JSON.stringify(state.cart))
    }
  },
});