<template>
  <div>
    home
  </div>
</template>

<script>
import { 
  mapMutations,
   } from 'vuex'; 

export default {
  name: 'home',
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
