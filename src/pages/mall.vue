<template>
  <div>
    mall
  </div>
</template>

<script>
import { 
  mapMutations,
   } from 'vuex'; 

export default {
  name: 'mall',
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
