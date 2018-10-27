<template>
  <div id="app">
    <h1>123</h1>
    <Button>Default</Button>
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

<style>
@import url('./reset.scss');
</style>
