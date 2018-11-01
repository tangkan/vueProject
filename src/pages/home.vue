<template>
  <div>
    <Tabs 
      value="name1"
      >
        <TabPane label="推荐" name="name1">
          <Carousel></Carousel>
          <div class="name1-img"></div>
          <div class="name1-img"></div>
          <div class="name1-img"></div>
        </TabPane>
        <TabPane label="水果" name="name2">
          <Carousel></Carousel>
          <Nav></Nav>
        </TabPane>
        <TabPane label="肉禽" name="name3">
          <Carousel></Carousel>
          <Nav></Nav>
        </TabPane>
        <TabPane label="水产" name="name4">
          <Carousel></Carousel>
          <Nav></Nav>
        </TabPane>
        <TabPane label="蔬菜" name="name5">
          <Carousel></Carousel>
          <Nav></Nav>
        </TabPane>
        <TabPane label="粮油" name="name6">
          <Carousel></Carousel>
          <Nav></Nav>
        </TabPane>
        <TabPane label="熟食" name="name7">
          <Carousel></Carousel>
          <Nav></Nav>
        </TabPane>
    </Tabs>
  </div>
</template>

<script>
import { 
  mapMutations,
  mapState,
   } from 'vuex'; 
import Carousel from '@/components/home/carousel/Carousel';
import Nav from '@/components/home/nav/Nav';

export default {
  name: 'home',
  components:{
    Carousel,
    Nav
  },
  beforeRouteEnter  (to, from ,next) {
    next(vm =>{
      vm.changeTabbar(vm.$route.name)
    })
  },
  methods: {
    //获取路由名，使选中的Tabbar高亮
    ...mapMutations(['changeTabbar'])    
  },
  mounted() {

  },
  computed:{
    ...mapState(['logining'])
  }
}
</script>

<style lang="scss">

.ivu-tabs-nav-scroll {
  .ivu-tabs-tab-active {
    color: #a2a899!important
  }
  .ivu-tabs-ink-bar {
    background-color: #a2a899
  }
}

.ivu-tabs-bar {
  margin-bottom: 1px;
}

.name1-img {
  height: 100px;
  background-color: #dedede;
  margin: 14px 10px;
}

</style>
