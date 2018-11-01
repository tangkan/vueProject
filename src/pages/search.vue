<template>
  <div>
    <div class="search-content">
      <div class="hot">
        <h1>热门搜索</h1>
        <div class="hot-p">
          <Button
            size="small"
            v-for="item in hotSearch"
            :key="item.id"
            @click="getSearch(item.keyword)"
          >{{item.keyword}}</Button>
        </div>
      </div>
      <div class="history">
        <h1>历史搜索</h1>
        <div class="history-p">
          <Button
            size="small"
            v-for="(item,index) in keyword"
            :key="index"
            @click="getSearch(item)"
          >{{item}}</Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  mapState,
  mapMutations
} from 'vuex'

export default {
  name: 'search',
  data() {
    return {
      hotSearch: [],
      searchHistory: [],
      recommend: [],
      searchResult: [],
      keyword: window.localStorage.getItem('keyword').split(',') || []
    }
  },
  created() {
    this.changeisSearchPage(true);
    this.getHistory();
    this.getHotSearch();
  },
  mounted() {
    this.changeIsHasReturnBtn(true)
  },
  beforeDestroy() {
    this.changeisSearchPage(false);
    this.changeIsHasReturnBtn(false)
  },
  computed: {
    hasData() {
      return this.searchResult.length !== 0;
    },
  },
  methods:{
    ...mapMutations(['changeIsHasReturnBtn','changeisSearchPage']),
    getHistory(his) {
      this.searchHistory = window.localStorage.getItem('searchHistory');
    },
    getHotSearch(hot) {
      this.$ajax.getHotSearchData(hot)
        .then(res => {
          this.hotSearch = res.data.data;
        })
    },
    getSearch(keyword) {
      this.keyword.unshift(keyword);
      //先将要搜索的keyword存入localStorage中
      window.localStorage.setItem('keyword',this.keyword.toString())
      this.$router.push({
        name: 'list',
        params: {
          id: keyword
        }
      })
    }
  }

}
</script>

<style lang="scss" scoped>

.search-content {
    h1{
      width: 100%;
      height: 44px;
      line-height: 44px;
      font-size: 15px;
      padding: 0 10px;
      border-bottom: 1px solid #ddedee;
      border-top: 1px solid #ddedee;
      color: #bbbbc9;
    }
    button {
      margin: 5px 6px;
    }

}

</style>
