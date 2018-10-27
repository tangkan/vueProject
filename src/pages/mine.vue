<template>
  <div>
    mine
  </div>
</template>

<script>
import { 
  mapMutations,
   } from 'vuex'; 

export default {
  name: 'mine',
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
