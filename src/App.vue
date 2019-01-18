<template>
  <div id="app">
    <!-- 请求一次数据后，缓存在内存中， 提升性能 -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
export default {
  name: 'App',
  components: {
    Home,
    City
  }
}
</script>

<style>

</style>
