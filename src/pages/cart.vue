<template>
  <div>
    cart
  </div>
</template>

<script>
import { 
  mapMutations,
  mapState
   } from 'vuex'; 

export default {
  name: 'cart',
  beforeRouteEnter  (to, from ,next) {
    next(vm =>{
      vm.changeTabbar(vm.$route.name)
    })
  },
  methods: {
    //获取路由名，使选中的Tabbar高亮
    ...mapMutations(['changeTabbar'])    
  }
}
</script>

<style>

</style>
