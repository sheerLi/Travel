<template>
  <div>
    <div class="banner" @click="handleClick">
      <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1506/7f/7f1ef549dd244659.water.jpg_600x330_3f85a30e.jpg" alt="">
      <div class="banner-info">
        <div class="banner-title">狼山(AAAA景区)</div>
        <div class="banner-number"><span class="iconfont">&#xe7bc;</span>39</div>
      </div>
    </div>
    <Gallery :imgs="imgs" v-show="showGallery" @close="closeGallery"></Gallery>
  </div>
</template>

<script>
import Gallery from 'common/gallery/Gallery'
export default {
  name: 'Detail',
  data () {
    return {
      showGallery: false,
      imgs: ['http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_r_800x800_6edd8174.jpg', 'http://img1.qunarzz.com/sight/p55/201211/04/fbcab3e5d6479ce893835fbb.jpg_r_800x800_6360f514.jpg']
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
    Gallery
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
      background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, .8))
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
