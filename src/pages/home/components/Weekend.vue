<template>
  <div>
    <div class="recommend-title">周末游玩</div>
    <ul>
      <li class="item border-bottom" v-for="item in recommendList" :key="item.id">
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
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/4e/3e87ee62e59cdb.jpg_r_640x214_fe6cc902.jpg',
        title: '杭州必打卡',
        desc: '杭州，前世今生与你有一场美丽约会'
      },
      {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1811/52/b6776b49d27025.jpg_r_640x214_35ae205c.jpg',
        title: '美丽普陀山',
        desc: '人间仙境杭州，佛教圣地普陀山等你来玩！在这里静心接收佛家的洗礼，用心感受佛文化'
      },
      {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1510/c1/afe3ab32b3bc23.jpg_r_640x214_beb61760.jpg',
        title: '精致暖汤',
        desc: '天然高品质温泉，这是冬天秀美容颜首选之地，让你疲惫的身影在这里消失的无影无踪'
      }]
    }
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
