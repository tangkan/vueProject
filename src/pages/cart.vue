<template>
 <div>
  <div v-if="allCount !==0">
    <div class="header">已免运费</div>
    <div class="goods-content">
      <div 
        class="content"
        v-for="item in cart"
        :key="item.id"
        >
        <div class="isChecked">
          <label>
            <input 
              type="checkbox"
              @change="changeChecked(item.id)"
              :checked="item.isChecked"
              >
          </label>
        </div>
        <div 
          class="left"
          @click="goToDetail(item.id)"
          >
          <img :src="`${item.img}`" alt="">
        </div>
        <div class="right">
          <h1>{{item.title}}</h1>
          <p>￥{{item.price}}</p>
          <div class="count">
            <span
              @click="reduceCount(item.id)"
            >-</span>
            <span>{{item.count}}</span>
            <span
              @click="addCount(item.id)"
            >+</span>
          </div>
        </div>
      </div>
    </div>
    <div class="balance">
      <div class="allChecked">
        <label>
          <input
            type="checkbox"
            :checked="isAllChecked"
            @change="changeAllChecked"
          >全选</label>
      </div>
      <div class="payment">
        <p>
          <em>合计:</em><span>￥{{allCheckedPrice}}</span>
          </p>
        <div
          @click="jiesuan"
        >去结算({{allCheckedCount}})</div>
      </div>
    </div>
  </div>
  <div v-else class="">
    <div class="shopping">
      <p>暂时还没有商品，您可以</p>
      <Button
        @click="goToHome"
      >回首页逛逛</Button>
    </div>
    <div class="Recommend">
      <h1>为您推荐</h1>
      <ul>
        <li
          v-for="item in reommentData"
          :key="item.id"
          @click="goToDetail(item.id)"
        >
          <div class="img"><img :src="item.img" alt=""></div>
          <p class="p1">{{item.title}}</p>
          <p class="p2">￥{{item.price}}</p>
        </li>
      </ul>
    </div>
  </div>
 </div>
</template>

<script>
import { 
  mapMutations,
  mapState,
  mapGetters
   } from 'vuex'; 
import { Toast } from 'mint-ui'

export default {
  name: 'cart',
  data() {
    return {
      reommentData:[]
    }
  },
  beforeRouteEnter (to, from ,next) {
    next(vm =>{
      vm.changeTabbar(vm.$route.name)
    })
  },
  mounted() {
    this.changeIsHasReturnBtn(true)
    if(this.allCount === 0){
      this.$ajax.getRecommend()
        .then(res => {
          this.reommentData = res.data.data;
        })
    }
  },
  beforeDestroy() {
    this.changeIsHasReturnBtn(false)
  },
  methods: {
    //获取路由名，使选中的Tabbar高亮
    ...mapMutations(['changeTabbar','addCount','reduceCount',
    'changeIsHasReturnBtn','changeChecked','changeAllChecked']),
    goToDetail(id) {
      this.$router.push({
        name: 'detail',
        params: {
          id
        }
      });
    },
    goToDetail(id) {
      this.$router.push({
        name: 'detail',
        params: {
          id
        }
      });
    },
    goToHome() {
      this.$router.push('/home');
    },
    jiesuan() {
      if(this.allCheckedCount !== 0){
        
        if(this.isLogin){
          Toast('再去逛逛吧~');
        }else{
          this.$router.push('/login')
        }
      }else{
        Toast('至少要有一件商品');
      }
    }
  },
  computed: {
    ...mapState(['cart','isLogin']),
    ...mapGetters(['allCount','allPrice','isAllChecked','allCheckedCount','allCheckedPrice']),
  },
  watch: {
    allCount: function(value,oldValue){
      if(value === 0){
        this.$ajax.getRecommend()
          .then(res => {
            this.reommentData = res.data.data;
          })
      }
    }
  }
}
</script>

<style lang="scss" scoped>

.header {
  height: 50px;
  line-height: 50px;
  padding-left: 20px;
  font-size: 15px;
  border-bottom: 1px solid #a8c2ae;
}
.goods-content {
  padding-bottom: 58px;
  .isChecked {
    height: 120px;
    line-height: 120px;
    margin: 0 15px;
  }
}
.balance {
  width: 100%;
  height: 58px;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #dedede;
  display: flex;
  justify-content: space-around;
  .allChecked {
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .payment {
    width: 60%;
    p {
      width: 90px;
      padding: 10px 0;
      display: inline-block;
      text-align: center;
      em {
        font-weight: bolder;
        font-size: 16px;
      }
      span {
        color: #f04b22;
        font-size: 18px;
      }
    }
    div {
      float: right;
      width: 120px;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #e76b6b;
      border-radius: 4px;
      color: #ffffff;
    }
  }

}
.content {
  width: 100%;
  overflow: hidden;
  border-bottom: 1px solid #a8c2ae;
  padding-bottom: 2px;
  & > div {
    float: left;
  }
  .left {
    width: 120px;
    height: 120px;
    padding: 4px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .right {
    width: 52%;
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    h1 {
      font-size: 18px;
      height: 34px;
      line-height: 34px;
      margin: 3px 0;
    }
    p {
      height: 35px;
      line-height: 40px;
      margin-bottom: 6px;
    } 
    .count {
      height: 36px;
      span {
        width: 36px;
        height: 34px;
        float: left;
        line-height: 34px;
        text-align: center;
        display: block;
        border: 1px solid #dedede;
      }
    }
  }
}

.shopping {
  width: 100%;
  height: 200px;
  background-color: #effaf7;
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    color: #a8c2ae
  }
}

.Recommend {
  h1 {
    font-size: 20px;
    margin: 10px 0;
    text-align: center;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      width: 50%;
      height: 210px;
      .img {
        width: 150px;
        height: 150px;
        margin-left: 20px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      p {
        margin-left: 22px;
        font-size: 16px;
      }
      .p1 {
        height: 26px;
        line-height: 26px;
        font-weight: bolder;
        margin-bottom: 3px;
      }
      .p2 {
        color: #f04b22;
      }
    }
  }
}

</style>
