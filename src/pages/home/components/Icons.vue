<template>
  <div class="icons">
    <swiper>
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
  data () {
    return {
      iconList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        desc: '景点门票'
      },
      {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
        desc: '一日游'
      },
      {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
        desc: '北京必游'
      },
      {
        id: '0004',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/e3/67df61427c8e1302.png',
        desc: '茶馆相声'
      },
      {
        id: '0005',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
        desc: '动植物园'
      },
      {
        id: '0006',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png',
        desc: '故宫'
      },
      {
        id: '0007',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
        desc: '名胜古迹'
      },
      {
        id: '0008',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/fc/b10a6b2e4f0fe102.png',
        desc: '北京滑雪'
      },
      {
        id: '0009',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png',
        desc: '泡温泉'
      },
      {
        id: '0010',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/b2/bfbc5d66e0ab5a02.png',
        desc: '冰雪大世界'
      }]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
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
