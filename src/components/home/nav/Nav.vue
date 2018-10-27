<template>
  <div class="nav">
    <ul>
      <li>新品上线</li>
      <li>橙柑橘柚</li>
      <li>清甜梨子</li>
      <li>清脆苹果</li>
      <li>东南亚风情</li>
      <li>热情新建</li>
      <li>品味新西兰</li>
      <li>国产精选</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'nav'
}
</script>

<style lang="scss" scoped>

.nav {
  width: 100%;
  height: 160px;
  background-color: #dedede;
  ul {
    display: flex;
    flex-wrap: wrap;
    height: 100%;
    justify-content: space-around;
    li{
      width: 103px;
      height: 79px;
      text-align: center;
    }
  }
}

</style>
