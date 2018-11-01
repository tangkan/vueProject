<template>
  <div class="header">
    <div class="address">
        <div v-if="isHasReturnBtn">
          <Icon 
            type="ios-arrow-back"
            @click="goBack()"
          />
        </div>
    </div>
    <div class="search">
      <Input 
        prefix="ios-search" 
        placeholder="请输入商品名……"
        clearable
        v-model="keyword"
        @on-focus="gotoSearch"
        />
    </div>
    <div 
      v-if="isListPage"
      class="icon-content"
      @click="goToCart"
      >
      <Badge :count="allCount">
        <Icon type="ios-cart-outline" />
      </Badge>
    </div>
    <div 
      v-else-if="isSearchPage"
      class="search-content"
      >
      <Button
        @click="getSearch"
      >搜索</Button>
    </div>
    <div v-else class="login">
      <Button
        v-if="!isLogin"
        @click="goToLogin"
      >登录</Button>
      <p 
        class="username"
        v-else
        @click="goToMine"
        >
        {{username}}
      </p>
    </div>
  </div>
</template>

<script>
import { 
  mapState,
  mapGetters
   } from 'vuex'

export default {
  name: 'headedr',
  data() {
    return {
      keyword:'',
      keywords: window.localStorage.getItem('keyword').split(',') || []
    }
  },
  computed: {
    ...mapState(['isHasReturnBtn','isListPage','isLogin','username','isSearchPage']),
    ...mapGetters(['allCount'])
  },
  methods: {
    goBack() {
      this.$router.back();
    },
    goToCart() {
      this.$router.push("/cart");
    },
    goToLogin() {
      this.$router.push("/login")
    },
    goToMine() {
      this.$router.push("/mine")
    },
    gotoSearch() {
      this.$router.push("/search")
    },
    getSearch() {
      this.keywords.unshift(this.keyword);
      // 先将要搜索的keyword存入localStorage中
      window.localStorage.setItem('keyword',this.keywords.toString())
      this.$router.push({
        name: 'list',
        params: {
          id: this.keyword
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  position: fixed;
  display: flex;
  justify-content: space-around;
  padding: 5px;
  border-bottom: 1px solid #dedede;
  background-color: #a8c2ae;
  .search {
    width: 237px;
    input {
      background-color: #f7f7f7;
    }
  }
  .address {
    width: 30px;
    text-align: center;
    line-height: 32px;
    font-size: 28px;
  }
  .icon-content {
    display: flex;
    justify-content: center;
    align-items: center;
    i {
      font-size: 25px;
    }
  }
  .username {
    text-align: center;
    height: 32px;
    line-height: 32px;
    font-weight: bolder;
  }
}
</style>
