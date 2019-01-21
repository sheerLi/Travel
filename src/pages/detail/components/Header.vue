<template>
  <div>
   <router-link
    class="header-abs"
    tag="div"
    to="/"
    v-show="showAbs"
  >
     <span class="iconfont header-abs-back">&#xe624;</span>
   </router-link>
   <div
    class="header-fixed"
    v-show="!showAbs"
    :style="opcityStyle"
  >
      <router-link to="/">
        <span class="iconfont header-back">&#xe624;</span>
      </router-link>
      景点详情
   </div>
  </div>
</template>

<script>
export default {
  name: 'DeatilHeader',
  data () {
    return {
      showAbs: true,
      opcityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opcityStyle = {
          opacity
        }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header-abs
    position: absolute
    top: .2rem
    left: .2rem
    width: .8rem
    height: .8rem
    line-height: .8rem
    border-radius: .4rem
    background: rgba(0, 0 , 0, .8)
    text-align: center
    .header-abs-back
      font-size: .4rem
      color: #fff
  .header-fixed
    z-index: 2
    position: fixed
    top: 0
    left: 0
    right: 0
    height: .86rem
    line-height: .86rem
    overflow: hidden
    text-align: center
    background-color: $bgColor
    color: #fff
    font-size: .32rem
    .header-back
      position: absolute
      top: 0
      left: 0
      width: .64rem
      text-align: center
      font-size: .4rem
      color: #fff
</style>
