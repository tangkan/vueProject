<template>
  <div>
    <router-view></router-view>
    <div class="tabbar">
        <router-link
         v-for="item in routes" 
         :to="item.path" 
         :key="item.path"
         tag='div'
         >
          <div>
            <i 
            :class="`icon iconfont icon-${item.name}-${activetabbar === item.name?'active':'normal'}`" 
            />
          </div>
          <div class="tabbar-text">{{item.text}}</div>
         </router-link>
    </div>
  </div>
</template>

<script>
import routes from '@/router/routes'
import { 
  mapMutations,
  mapState
   } from 'vuex'

export default {
  name: 'tabbar',
  data() {
    return {
      routes: routes.filter( item => item.isTabbar === true )
    }
  },
  computed: {
    ...mapState(['activetabbar'])
  }
}
</script>


<style lang="scss" scoped>
@import url('./icon.scss');

.tabbar {
  display: flex;
  position: absolute;
  background-color: #a8c2ae;
  left: 0;
  right: 0;
  bottom: 0;
  height: 58px;
  & > div {
    flex: 1;
    text-align: center;
    font-size: 14px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .iconfont {
      font-size: 28px;
    }
    .tabbar-text {
      font-size: 14px;
    }
  }
  .router-link-exact-active,
  .router-link-active {
    color: #b7e7d9;
    background-color: #a2a899;
  }
}
</style>
