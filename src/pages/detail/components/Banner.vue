<template>
  <div>
    <div class="banner" @click="handleClick">
      <img class="banner-img" :src="bannerImg" alt="">
      <div class="banner-info">
        <div class="banner-title">{{ this.sightName }}</div>
        <div class="banner-number"><span class="iconfont">&#xe7bc;</span>{{ this.gallaryImgs.length }}</div>
      </div>
    </div>
    <fade-animation>
      <Gallery :imgs="gallaryImgs" v-show="showGallery" @close="closeGallery"></Gallery>
    </fade-animation>
  </div>
</template>

<script>
import Gallery from 'common/gallery/Gallery'
import FadeAnimation from 'common/fade/FadeAnimation'
export default {
  name: 'DetailBanner',
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  data () {
    return {
      showGallery: false
    }
  },
  methods: {
    handleClick () {
      this.showGallery = true
    },
    closeGallery () {
      this.showGallery = false
    }
  },
  components: {
    Gallery,
    FadeAnimation
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position: relative
    height: 0
    overflow: hidden
    padding-bottom: 55%
    .banner-img
      width: 100%
    .banner-info
      display: flex
      line-height: .6rem
      position: absolute
      left: 0
      right: 0
      bottom: 0
      color: #fff
      .banner-title
        flex: 1
        padding: 0 .2rem
        font-size: .32rem
      .banner-number
        font-size: .24rem
        height: .32rem
        line-height: .32rem
        margin-top: .14rem
        padding: 0 .4rem
        border-radius: .2rem
        background: rgba(0,0,0,.8)
        .iconfont
          font-size: .24rem
</style>
