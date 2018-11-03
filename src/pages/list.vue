<template>
  <div>
    <div 
      class="content"
      v-for="item in goodsLsit"
      :key="item.id"
      >
      <div 
        class="left"
        @click="goToDetail(item.id)"
        >
        <img  
          v-lazy="item.img"
          alt="">
      </div>
      <div class="right">
        <h1>{{item.title}}</h1>
        <p>{{item.dec}}</p>
        <p>￥{{item.price}}</p>
        <Button
          @click="addToCart(item)"
        >加入购物车</Button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name:'list',
  data() {
    return {
      goodsLsit:[]
    }
  },
  mounted() {
    this.changeIsHasReturnBtn(true);
    this.changeCartIcon(true)
  },
  beforeDestroy() {
    this.changeIsHasReturnBtn(false)
    this.changeCartIcon(false)
  },
  methods: {
    ...mapMutations(['changeIsHasReturnBtn','changeCartIcon','addToCart']),
    goToDetail(id) {
      this.$router.push({
        name:'detail',
        params: {
          id
        }
      })
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.$ajax.getList(vm.$route.params.id)
        .then(resp => {
          vm.goodsLsit = resp.data.data;
        })
    });
  }
}
</script>

<style lang="scss" scoped>

.content {
  width: 100%;
  overflow: hidden;
  border-bottom: 1px solid #a8c2ae;
  padding-bottom: 8px;
  & > div {
    float: left;
  }
  .left {
    width: 120px;
    height: 120px;
    padding: 4px;
  }
  .right {
    width: 64%;
    margin-left: 10px;
    padding-top: 2px;
    display: flex;
    flex-direction: column;
    h1 {
      font-size: 18px;
      height: 20px;
      margin: 3px 0;
    }
    p {
      height: 30px;
      line-height: 30px;
    } 
    button {
      width: 40%;
      background-color: #a8c2ae;
    }
  }
}

</style>
