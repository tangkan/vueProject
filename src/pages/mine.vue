<template>
  <div>
    <div class="mine-header">
      <h1>个人中心</h1>
      <div class="mine-box">
        <div class="mine-img">
          <div class="img"></div>
        </div>
        <div class="mine-dec">
          <p class="mine-name"></p>
          <p class="mine-name"></p>
          <p class="mine-name"></p>
        </div>
      </div>
      <div class="mine-body">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    <div class="mine-footer">
      <Button
        v-if="isLogin"
        @click="logout"
      >退出登录
      </Button>
      <Button
        v-else
        @click="login"
      >登录
      </Button>
    </div>
  </div>
</template>

<script>
import { 
  mapMutations,
  mapState,
   } from 'vuex'; 

export default {
  name: 'mine',
  beforeRouteEnter  (to, from ,next) {
    next(vm =>{
      vm.changeTabbar(vm.$route.name)
    })
  },
  mounted() {
    this.changeisMinePage(true);
  },
  beforeDestroy() {
    this.changeisMinePage(false);
  },
  methods: {
    //获取路由名，使选中的Tabbar高亮
    ...mapMutations(['changeTabbar','changeIsLogin','changeisMinePage']),
    logout() {
      this.changeIsLogin(false);
      this.$router.push('login');
    },
    login() {
      this.$router.push('login');
    }
  },
  computed: {
    ...mapState(['isLogin']),
  }
}
</script>

<style lang="scss" scoped>

.mine-header {
  height: 400px;
  h1 {
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 18px;
    border-bottom: 1px solid #dedede;
    background-color: #a8c2ae;
  }
  .mine-box {
    height: 100px;
    border: 1px solid #dedede;
    margin: 10px 0;
    .mine-img {
      width: 40%;
      height: 100%;
      float: left;
      border-right: 1px solid #dedede;
      .img {
        width: 98px;
        height: 100%;
        border-radius: 50%;
        background: #dededd;
        margin-left: 25px;
      }
    }
    .mine-dec {
      width: 60%;
      height: 100%;
      float: right;
      .mine-name {
        height: 20px;
        border: 1px solid #dedede;
        margin: 10px 5px;
      }
    }
  }
  .mine-body {
    height: 360px;
    background-color: #ffffff;
    overflow: hidden;
    & > div {
      height: 70px;
      background-color: #dedede;
      margin: 15px 10px;
    }
  }
}

.mine-footer {
  position: absolute;
  bottom: 60px;
  left: 0;
  right: 0;
  width: 100%;
  height: 50px;
  text-align: center;
  button {
    width: 90%;
    height: 100%;
    font-size: 16px;
    background-color: #dedede;
  }
}

</style>
