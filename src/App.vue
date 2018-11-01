<template>
  <div id="app" class="app">
    <div v-if="isMinePage === false">
      <div class="header-content" v-if="logining === false">
        <Header></Header>        
      </div>
    </div>   
    <div class="main">
      <transition>
        <router-view></router-view>
      </transition>
    </div>
    <div class="foot" v-if="logining === false">
      <div v-if="isHasReturnBtn">
      </div>
      <div v-else>
        <Tabbar></Tabbar>
      </div>
    </div>

  </div>
</template>

<script>
import { mapState } from 'vuex'
import Tabbar from '@/components/tabbar/Tabbar'
import Header from '@/components/header/Header'

export default {
  name: 'App',
  components: {
    Tabbar,
    Header
  },
  computed: {
    ...mapState(['isLogin','isHasReturnBtn','logining','isMinePage'])
  }
}

</script>

<style lang="scss">
@import url('./reset.scss');

.v-enter-active {
  transition: opacity .7s;
}
.v-enter {
  opacity: 0;
}
.header-content {
  height: 43px;
}

</style>
