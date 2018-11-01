import Vue from 'vue'
import Vuex from 'vuex'
import { login } from '@/services'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    isLogin: Boolean(window.localStorage.getItem('blsh-x-token')),
    logining: false,
    username: window.localStorage.getItem('username') || '',
    activetabbar: 'home',
    isMinePage: false,
    isHasReturnBtn: false,
    isSearchPage: false,
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
      },0).toFixed(2)
    },
    isAllChecked(state) {
      if(state.cart.length>0){
        return state.cart.every(item => item.isChecked === true)
      }else{
        return false
      }
    },
    allCheckedPrice(state) {
      return state.cart.filter(item => item.isChecked === true)
        .reduce((result,item) => {
          result += item.count * item.price
          return result
        },0).toFixed(2)
    },
    allCheckedCount(state) {
      return state.cart.filter(item => item.isChecked === true)
        .reduce((result,item) => {
          result += item.count
          return result
        },0)
    },
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
    changeChecked(state,id) {
      state.cart = state.cart.map(item => {
        if(item.id === id){
          item.isChecked = !item.isChecked;
        }
        return item
      })
      window.localStorage.setItem('blsh-cart',JSON.stringify(state.cart));
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
      window.localStorage.setItem('blsh-cart',JSON.stringify(state.cart))
    },
    changeAllChecked(state,e) {
      state.cart = state.cart.map(item => {
        item.isChecked = e.target.checked;
        return item
      })
      window.localStorage.setItem('blsh-cart',JSON.stringify(state.cart))
    },
    changeIsLogin(state,bool) {
      state.isLogin = bool
    },
    changeLogining(state,bool) {
      state.logining = bool
    },
    changeUsername(state,name) {
      state.username = name
    },
    changeisSearchPage(state,bool) {
      state.isSearchPage = bool
    },
    changeisSearchPage(state,bool) {
      state.isSearchPage = bool
    },
    changeisMinePage(state,bool) {
      state.isMinePage = bool
    }

  },
  actions: {
    getChangeIsLogin(store) {
      login().then(res => {
        if(res.data.code === 200){
          //将用户token和用户名存入loaclStorage中
          window.localStorage.setItem('blsh-x-token',res.data.data.token);
          window.localStorage.setItem('username',res.data.data.username);
          store.commit('changeIsLogin',true);
          store.commit('changeUsername',res.data.data.username);
        }
      })
    },
  }
});