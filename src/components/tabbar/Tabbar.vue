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
         {{item.text}}</router-link>
    </div>
  </div>
</template>

<script>
import routes from '@/router/routes'

export default {
  name: 'tabbar',
  data() {
    return {
      routes: routes.filter( item => item.isTabbar === true )
    }
  }
}
</script>


<style lang="scss" scoped>
.tabbar {
  display: flex;
  position: absolute;
  background-color: #a8c2ae;
  left: 0;
  right: 0;
  bottom: 0;
  height: 64px;
  line-height: 64px;
  & > div{
    flex: 1;
    text-align: center;
  }
  .router-link-exact-active,
  .router-link-active {
    color: #383992;
    background-color: #8ea56b;
  }
}
</style>
