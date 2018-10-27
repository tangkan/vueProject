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
    ...mapMutations(['changeTabbar'])    
  }
}
</script>

<style>

</style>
