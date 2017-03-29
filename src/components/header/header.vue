<template>
  <div class="header">
    <div class="header-img">
      <span>
        <img src="./logo.png" alt="亚信" width="38px" height="38px">
      </span>
    </div>
    <input type="text" class="search" placeholder="Search..." v-show="this.$store.state.token">
    <div class="header-middle">
      aaaa
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default{
      props:{

      }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>

  headerBackGroundColor=#fdfcff
  fontSize =14px
  fontFamily="PingFang SC","Helvetica Neue","Hiragino Sans GB","Segoe UI","Microsoft YaHei","微软雅黑",sans-serif;
  .header
    width 100%
    height 60px
    position fixed
    background-color headerBackGroundColor
    z-index 1000
    .header-img
      display table
      float left
      height 100%
      margin-left 26px
      span
        display table-cell
        vertical-align middle
    .search
      position absolute
      top:18px
      margin-left 22px
      width 120px
      border none
      border-bottom 1px solid #CCCCCC
      background-color headerBackGroundColor
      font-size fontSize
      outline: 0
      font-family fontFamily
      padding:2px 20px 2px 2px
      vertical-align middle
      transition  width .4s
      background url('./nav_search.png') no-repeat right center
      background-size 14px 14px
      z-index 10001
      &:focus
        width:200px
        background-image url('./nav_search_focus.png')
        border-bottom-color #8a8a8a
    .header-middle
      position relative
      text-align center
      line-height 60px
      z-index 999
</style>
