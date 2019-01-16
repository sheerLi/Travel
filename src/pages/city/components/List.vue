<template>
  <div class="list">
    <div class="area">
      <div class="title border-topbottom">当前城市</div>
      <div class="button-list">
        <div class="button-wrapper">
          <div class="button">北京</div>
        </div>
        <div class="button-wrapper">
          <div class="button">北京</div>
        </div>
        <div class="button-wrapper">
          <div class="button">北京</div>
        </div>
        <div class="button-wrapper">
          <div class="button">北京</div>
        </div>
      </div>
    </div>
    <div class="area">
      <div class="title border-topbottom">热门城市</div>
      <div class="button-list">
        <div class="button-wrapper">
          <div class="button">北京</div>
        </div>
        <div class="button-wrapper">
          <div class="button">北京</div>
        </div>
        <div class="button-wrapper">
          <div class="button">北京</div>
        </div>
        <div class="button-wrapper">
          <div class="button">北京</div>
        </div>
      </div>
    </div>
    <div class="area">
      <div class="title border-topbottom">A</div>
      <div class="city-list">
        <div class="list-item border-bottom">阿拉尔</div>
        <div class="list-item border-bottom">阿拉尔</div>
        <div class="list-item border-bottom">阿拉尔</div>
      </div>
    </div>
    <div class="area">
      <div class="title border-topbottom">A</div>
      <div class="city-list">
        <div class="list-item border-bottom">阿拉尔</div>
        <div class="list-item border-bottom">阿拉尔</div>
        <div class="list-item border-bottom">阿拉尔</div>
      </div>
    </div>
    <div class="area">
      <div class="title border-topbottom">A</div>
      <div class="city-list">
        <div class="list-item border-bottom">阿拉尔</div>
        <div class="list-item border-bottom">阿拉尔</div>
        <div class="list-item border-bottom">阿拉尔</div>
      </div>
    </div>
    <div class="area">
      <div class="title border-topbottom">A</div>
      <div class="city-list">
        <div class="list-item border-bottom">阿拉尔</div>
        <div class="list-item border-bottom">阿拉尔</div>
        <div class="list-item border-bottom">阿拉尔</div>
      </div>
    </div>
    <div class="area">
      <div class="title border-topbottom">A</div>
      <div class="city-list">
        <div class="list-item border-bottom">阿拉尔</div>
        <div class="list-item border-bottom">阿拉尔</div>
        <div class="list-item border-bottom">阿拉尔</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .border-topbottom
    &:before
      border-color: #ccc
    &:after
      border-color: #ccc
  .border-bottom
    &:after
      border-color: #ccc
  .list
    overflow: hidden
    position: absolute
    top: 1.68rem
    left: 0
    right: 0
    bottom: 0
    .title
      line-height: .64rem
      background-color #eee
      padding-left: .2rem
      font-size: .26rem
    .button-list
      overflow: hidden
      padding: .1rem
      .button-wrapper
        float: left
        width: 33.33%
        .button
          padding: .18rem 0
          border: .01rem solid #ccc
          text-align: center
          border-radius: .06rem
          margin: .1rem
    .city-list
      .list-item
        height: .76rem
        line-height: .76rem
        padding-left: .2rem
</style>
