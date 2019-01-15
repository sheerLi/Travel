<template>
  <div class="swiper">
    <swiper :options="swiperOption" class="swiper" v-if="swiperLength">
      <!-- slides -->
      <swiper-slide v-for="item in list" :key="item.id" class="swiper-item">
        <img :src="item.imgUrl" alt="" class="swiper-img">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  },
  computed: {
    swiperLength () {
      return this.list.length
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
