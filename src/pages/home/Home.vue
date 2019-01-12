<template>
  <div>
    <HomeHeader></HomeHeader>
    <home-swiper></home-swiper>
  </div>
</template>

<script>
import HomeHeader from '@/pages/home/components/Header'
import HomeSwiper from '@/pages/home/components/Swiper'
export default {
  name: 'home',
  components: {
    HomeHeader,
    HomeSwiper
  }
}
</script>

<style lang="stylus" scoped>

</style>
