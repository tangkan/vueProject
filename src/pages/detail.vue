<template>
  <div>
    <div class="img-content">
      <img :src="`${detail.img}`" alt="">
    </div>
    <div class="dec">
      <p class="p-title">{{detail.title}}</p>
      <p class="p-dec">{{detail.dec}}</p>
      <p class="p-price"><span>￥</span>{{detail.price}}</p>
    </div>
    <div class="foot">
      <div class="icon">
        <div>
          <Icon type="ios-cart-outline" />
          <div>购物车</div>
        </div>
        <div>
          <Icon type="ios-star-outline" />
          <div>收藏</div>
        </div>
        <div>
          <Icon type="ios-text-outline" />
          <div>客服</div>
        </div>
      </div>
      <div class="addToCart">
        <Button
          @click="addToCart(detail)"
        >加入购物车</Button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'detail',
  data() {
    return {
      detail:{}
    }
  },
  mounted() {
    this.changeIsHasReturnBtn(true)
  },
  methods: {
    ...mapMutations(['changeIsHasReturnBtn','addToCart']),
  },
  beforeDestroy() {
    this.changeIsHasReturnBtn(false)
  },
  created() {
    this.$ajax.getDetail(this.$route.params.id)
      .then(resp => {
        this.detail = resp.data.data;
      })
  }
}
</script>

<style lang="scss" scoped>

.img-content {
  width: 100%;
  height: 0;
  padding-top: 100%;
  background-color: #dedede;
  position: relative;
  img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
  }
}

.foot{
  width: 100%;
  height: 50px;
  position: fixed;
  bottom: 0;
  left: 0;
  // background-color: #dedede;
  border-top: 1px solid #dedede;
  display: flex;
  justify-content: space-around;
  .icon {
    width: 45%;
    display: flex;
    justify-content: space-around;
    i {
      font-size: 35px;   
    }
    & > div {
      text-align: center;
      font-size: 12px;
    }
  }
  .addToCart {
    width: 55%;
    button {
      width: 100%;
      height: 100%;
      background-color: #a8c2ae;
      font-size: 18px;
    }
  }
}

.dec {
  padding: 10px 5px;
  .p-title {
    font-size: 20px;
    color: #0c0909
  }
  .p-dec {
    height: 24px;
    line-height: 24px;
    color: #665252;
  }
  .p-price {
    margin-top: 20px;
    font-size: 30px;
    color: #d85858;
    span {
      font-size: 20px;
    }
  }
}

</style>
