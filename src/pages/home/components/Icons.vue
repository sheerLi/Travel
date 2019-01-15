<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) in pages" :key="index">
        <div class="icon" v-for="item in page" :key="item.id">
          <div class="icon-img-wrap">
            <img
              :src="item.imgUrl"
              alt
              class="icon-img"
            >
          </div>
          <p class="icon-desc">{{ item.desc }}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        autoplay: false
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
.icons >>> .swiper-container
  height: 0;
  padding-bottom: 3rem;
.icons
  margin-top: .1rem
  .icon
    position: relative;
    overflow: hidden;
    float: left;
    width: 25%;
    padding-bottom: 1.5rem
    .icon-img-wrap
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0.3rem;
      box-sizing: border-box;
      padding: 0.1rem;
      .icon-img
        display: block;
        margin: 0 auto;
        width: 1.1rem;
        height: 1.1rem;
    .icon-desc
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 0.3rem;
      line-height: 0.3rem;
      text-align: center;
      color: $darkTextColor;
      ellipsis()
</style>
