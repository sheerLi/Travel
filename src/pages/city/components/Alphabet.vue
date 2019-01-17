<template>
  <ul class="list">
    <li
      class="item" v-for="item in letters"
      :key="item"
      :ref="item"
      @click="handleLetterClick"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
    >
      {{ item }}
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    cities: Object
  },
  computed: {
    letters () {
      const letters = []
      for (let key in this.cities) {
        letters.push(key)
      }
      return letters
    }
  },
  data () {
    return {
      canTouchMove: false,
      startY: 0,
      timer: null
    }
  },
  updated () {
    // 组件更新时计算出定值，提升性能
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    handleLetterClick (e) {
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      this.canTouchMove = true
    },
    handleTouchMove (e) {
      if (this.canTouchMove) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        // 函数节流，提升性能
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 79
          const index = Math.floor((touchY - this.startY) / 20)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 16)
      }
    },
    handleTouchEnd () {
      this.canTouchMove = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .list
    position: absolute
    right: 0
    top: 1.58rem
    bottom: 0
    width: .4rem
    display: flex
    flex-direction: column
    justify-content: center
    color: $bgColor
    .item
      height: .4rem
      text-align:center
</style>
