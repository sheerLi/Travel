<template>
  <div class="swiper">
    <swiper :options="swiperOption" class="swiper">
      <!-- slides -->
      <swiper-slide v-for="item in imgList" :key="item.id" class="swiper-item">
        <img :src="item.url" alt="" class="swiper-img">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      imgList: [
        {
          id: '001',
          url: 'http://img1.qunarzz.com/piao/fusion/1901/17/d1821879b04ca602.jpg_750x200_115ccc5d.jpg'
        },
        {
          id: '002',
          url: 'http://img1.qunarzz.com/piao/fusion/1811/7c/8e5c4ab8ee8b7402.jpg_750x200_dd7a38dd.jpg'
        },
        {
          id: '003',
          url: 'http://img1.qunarzz.com/piao/fusion/1812/d6/daa880b254940402.jpg_750x200_b114308a.jpg'
        },
        {
          id: '004',
          url: 'http://img1.qunarzz.com/piao/fusion/1811/31/da037478f37cf202.jpg_750x200_fe28d396.jpg'
        }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  // 样式进行穿透，拜托scoped的限制
  .swiper >>> .swiper-pagination-bullet-active
      background-color: #fff
  .swiper
    width: 100%
    height: 0
    overflow: hidden
    padding-bottom: 26.77%
    background-color: #eee
    .swiper-img
      width: 100%
</style>
