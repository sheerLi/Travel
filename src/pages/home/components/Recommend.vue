<template>
  <div>
    <div class="recommend-title">猜你喜爱</div>
    <ul>
      <li class="item border-bottom" v-for="item in recommendList" :key="item.id">
        <img :src="item.imgUrl" alt="" class="item-img">
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
          <button class="item-button">查看详情</button>
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
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1506/7f/7f1ef549dd244659.water.jpg_200x200_48a59e1f.jpg',
        title: '狼山',
        desc: '坐落于南通'
      },
      {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1506/7f/7f1ef549dd244659.water.jpg_200x200_48a59e1f.jpg',
        title: '狼山',
        desc: '坐落于南通'
      },
      {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1506/7f/7f1ef549dd244659.water.jpg_200x200_48a59e1f.jpg',
        title: '狼山',
        desc: '坐落于南通'
      }]
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
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
        ellipsis()
      .item-desc
        line-height: .4rem
        color: #ccc
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
