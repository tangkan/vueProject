<template>
  <div>
    <h1>用户登录</h1>
    <div class="a">
      <!-- <a href="javascript:;">手机号快捷登录</a>
      <a href="javascript:;">账号密码登录</a> -->
    </div>
    <div>
      <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
      <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
      <div class="loginBtn">
        <mt-button
          size="large"
          type="primary"
          @click="getChangeIsLogin"
        >登录</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
import {
  mapState,
  mapMutations,
  mapActions
} from 'vuex'

export default {
  name: 'login',
  data() {
    return {
      username:'',
      password:''
    }
  },
  computed: {
    ...mapState(['logining','isLogin'])
  },
  methods: {
    ...mapMutations(['changeLogining','changeIsLogin']),
    ...mapActions(['getChangeIsLogin'])
  },
  mounted() {
    this.changeLogining(true);
  },
  beforeDestroy() {
    this.changeLogining(false);
  },
  watch: {
    isLogin(n) {
      if(n === true){
        this.changeLogining(false)
        this.changeIsLogin(true);
        const path = this.$route.params.to ? this.$route.params.to.path : '/';
        this.$router.push(path)
      }
    }
  }
}
</script>

<style lang="scss" scoped>

h1 {
  width: 100%;
  height: 50px;
  line-height: 50px;
  font-size: 20px;
  text-align: center;
  border-bottom: 1px solid #dedede;
}
.a {
  display: flex;
  justify-content: space-around;
  a {
    width: 50%;
    height: 40px;
    text-align: center;
    line-height: 40px;
    display: inline-block;
    text-decoration: none;
    color: #000000;
    background-color:#ebe6e6;
  }
}

.on {
  background-color: #ffffff;
}

.loginBtn {
  padding: 0 7px;
}

</style>
