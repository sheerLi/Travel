<template>
  <div>
    <div class="recommend-title">猜你喜爱</div>
    <ul>
      <router-link
        class="item border-bottom"
        v-for="item in list"
        :key="item.id"
        :to="'/detail/'+item.id"
        tag="li"
      >
        <img :src="item.imgUrl" alt="" class="item-img">
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
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
    margin-top: .2rem
    line-height: .8rem
    background-color #eee
    text-indent: .2rem
  .item
    display: flex
    height: 1.88rem
    .item-img
      width: 1.7rem
      height: 1.7rem
      padding: .1rem
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
      .item-button
        line-height: .44rem
        margin-top: .1rem
        background-color: #ff9300
        padding: 0.06rem
        border-radius: .06rem
        color: #fff
        font-size: .28rem
</style>
