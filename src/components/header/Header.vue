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
            />
        </div>
        <div class="login">
          <Button>登录</Button>
        </div>
      </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'headedr',
  computed: {
    ...mapState(['isHasReturnBtn'])
  },
  methods: {
    goBack() {
      this.$router.back();
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
    width: 67%;
    input {
      background-color: #f7f7f7;
    }
  }
  .address {
    width: 46px;
    text-align: center;
    line-height: 32px;
    font-size: 28px;
  }
}
</style>
