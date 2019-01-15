<template>
  <div>
    <div class="recommend-title">周末游玩</div>
    <ul>
      <li class="item border-bottom" v-for="item in list" :key="item.id">
        <div class="item-img-wrap">
          <img :src="item.imgUrl" alt="" class="item-img">
        </div>
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    list: Array
  }
}
</script>
<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  @import '~styles/varibles.styl'
  .recommend-title
    line-height: .8rem
    background-color #eee
    text-indent: .2rem
  .item
    padding: .1rem
    .item-img-wrap
      overflow: hidden
      height: 0
      padding-bottom: 38.13%
      .item-img
        width: 100%
    .item-info
      flex: 1
      padding: .1rem
      min-width: 0
      .item-title
        line-height: .54rem
        font-size: .32rem
        color: $largeDarkTextColor
        ellipsis()
      .item-desc
        line-height: .4rem
        color: $lightTextColor
        ellipsis()
</style>
