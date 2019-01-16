<template>
  <div class="header">
    <div class="headerLeft">
      <span class="iconfont back-icon">&#xe624;</span>
    </div>
    <div class="headerInput">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="headerRight">
        {{ city }}
        <span class="iconfont arrow-icon">&#xe600;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'home',
  props: {
    city: String
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl';
  .header
    display: flex
    line-height: .88rem
    background-color: $bgColor
    color: #fff
    .headerLeft
      width: .8rem
      float: left
      .back-icon
        display: block
        width: 100%;
        height: .88rem;
        font-size: .4rem
        text-align: center
    .headerInput
      flex: 1
      border-radius: 0.1rem
      color: #e4e7ea
      background-color: #fff
      margin: 0.14rem 0
      padding-left: 0.2rem
      height: 0.6rem
      line-height: 0.6rem
    .headerRight
      width: 1.28rem
      float: right
      text-align: center
      color: #fff
      .arrow-icon
        margin-left: -0.04rem
        font-size: 0.3rem
</style>
