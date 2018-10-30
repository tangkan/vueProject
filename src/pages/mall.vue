<template>
  <div class="mall-content">
    <div class="list-left">
        <div>
          <router-link 
          v-for="item in mallRoutes" 
          :to="item.path"
          :key="item.path"
          tag="div"
          >{{item.text}}</router-link>
        </div>
    </div>
    <div class="list-right">
        <MallRightList
          :mallRightListData="mallRightListData"
        ></MallRightList>
    </div>
  </div>
</template>

<script>
import mallRoutes from '@/router/mallRoutes'
import MallRightList from '@/components/mall/MallRightList'

import { 
  mapMutations,
   } from 'vuex'; 

export default {
  name: 'mall',
  components: {
    MallRightList
  },
  data() {
    return {
      mallRoutes: mallRoutes.filter( item => item.isTabbar === true ),
      mallRightListData: [],
    }
  },
  beforeRouteEnter (to, from ,next) { 
    next(vm =>{
      vm.changeTabbar(vm.$route.name)
    })
  },
  beforeRouteUpdate (to, from ,next) {
    next();
    this.getRightList();
  },
  methods: {
    //获取路由名，使选中的Tabbar高亮
    ...mapMutations(['changeTabbar']),
    getRightList(to) {
      this.$ajax.getMallRightList()
        .then(resp=>{
          this.mallRightListData = resp.data.data;
      })
    }
  },
  mounted() {
    this.getRightList();
  }
}
</script>

<style lang="scss" scoped>
.mall-content {
  width: 100%;
  height: 100%;
  background-color: #f8f8f8;
  .list-left {
    position: fixed;
    padding: 43px 0 58px 0;
    top: 0;
    left: 0;
    box-sizing: border-box;
    width: 90px;
    height: 100%; 
    & > div {
      height: 100%;
      overflow-y: auto;
      div {
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-top: 1px solid #dedede;
        border-bottom: 1px solid #dedede;
        background-color: #fff;
      }
    }
  }
  .list-right {
    height: 100%;
    padding-left: 90px;
    overflow: hidden;
  }
  .router-link-exact-active,
  .router-link-active {
    background-color: #f8f8f8!important;
    color: #a8c2ae;
    border-left: 2px solid #a8c2ae;
  }
}

</style>
