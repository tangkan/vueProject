 <template>
  <div class="rightList">
    <h1>本店推荐
      <span>全部{{title}}</span>
    </h1>
    <div class="list-content">
      <dl 
        v-for="item in mallRightListData"
        :key="item.id"
        @click="goToList(item.id)"
        >
        <dt><img :src="`${item.img}`" alt=""></dt>
        <dd>{{item.title}}</dd>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MallRightList',
  props:['mallRightListData'],
  data() {
    return {
      title: ''
    }
  },
  created() {
    this.title = this.$route.meta.text
  },
  updated() {
    this.title = this.$route.meta.text
  },
  methods: {
    goToList(id) {
      this.$router.push({
        name:"list",
        params:{
          id
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>

h1 {
  font-size: 16px;
  padding: 15px;
  span {
    font-size: 12px;
    float: right;
    padding-top: 4px;
  }
}

.rightList {
  height: 100%;
  overflow-y: auto;
  .list-content{
    margin: 0 14px 64px;
    display: flex;
    flex-wrap: wrap;
    background-color: #ffffff;
    dl {
      width: 33.33%;
      height: 88px;
      margin-top: 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
}

</style>
