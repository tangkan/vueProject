<template>
  <div id="app">
    <div class="header">
      <div class="address">
          123
      </div>
      <div class="search">
        <Input 
          prefix="ios-search" 
          placeholder="请输入商品名……"
          clearable
           />
      </div>
      <div class="login">
        <Button>登录</Button>
      </div>
    </div>

  
    <Tabbar></Tabbar>
  </div>

</template>

<script>
import Tabbar from '@/components/tabbar/Tabbar'

export default {
  name: 'App',
  components: {
    Tabbar
  }
}
</script>

<style lang="scss">
@import url('./reset.scss');

.header {
  display: flex;
  justify-content: space-around;
  padding: 5px;
  border-bottom: 1px solid #dedede;
  .search {
    width: 67%;
    input {
      background-color: #f7f7f7;
    }
  }
}

</style>
