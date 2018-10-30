<template>
  <div id="app" class="app">
    <div class="header-content">
      <Header></Header>
    </div>   
    <div class="main">
      <transition>
        <router-view></router-view>
      </transition>
    </div>

    <div class="foot">
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
    ...mapState(['isHasReturnBtn'])
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
