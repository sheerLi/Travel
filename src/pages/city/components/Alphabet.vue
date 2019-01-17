<template>
  <ul class="list">
    <li class="item" v-for="(item, key) in cities" :key="key">{{ key }}</li>
  </ul>
</template>

<script>
export default {
  props: {
    cities: Object
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
