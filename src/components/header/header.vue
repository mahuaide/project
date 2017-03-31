<template>
  <div class="header">
    <div class="header-img">
      <span>
        <img src="./logo.png" alt="logo" width="38px" height="38px">
      </span>
    </div>
    <input type="text" class="search" placeholder="Search..." v-show="this.$store.state.token">
    <div class="header-middle">
      <span class="project-name">运营商项目</span>
      <span class="iconfont icon-arrow_down"></span>
    </div>
    <div class="header-right">
      <span class="iconfont icon-add"></span>
      <span class="iconfont icon-notify"></span>
      <div class="header-user">
        <img src="./logo.png" alt="user" width="38px" height="38px">
        <span class="iconfont icon-arrow_down"></span>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default{
    props: {}
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  headerBackGroundColor = #fdfcff
  fontSize = 14px
  fontFamily = "PingFang SC", "Helvetica Neue", "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "微软雅黑", sans-serif;
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
      margin-left 22  px
      span
        display table-cell
        vertical-align middle
    .search
      position absolute
      top: 18px
      margin-left 22px
      width 120px
      border none
      border-bottom 1px solid #CCCCCC
      background-color headerBackGroundColor
      font-size fontSize
      outline: 0
      font-family fontFamily
      padding: 2px 20px 2px 2px
      vertical-align middle
      transition width .4s
      background url('./nav_search.png') no-repeat right center
      background-size 14px 14px
      z-index 10001
      &:focus
        width: 200px
        background-image url('./nav_search_focus.png')
        border-bottom-color #8a8a8a
    .header-middle
      position relative
      text-align center
      line-height 60px
      z-index 999
      .project-name
        color #1a1a1a
        font-size 14px
        font-weight bold
        &:hover
          cursor pointer
      .icon-arrow_down
        font-size 13px
        &:hover
          cursor pointer
    .header-right
      position absolute
      z-index 1000
      right 0px
      top 0
      height 60px
      width 30%
      text-align right
      line-height 60px
      font-size 0
      .header-user
        display inline-block
        position relative
        padding 0 20px 0 10px
        height 60px
        width 60px
        line-height 60px
        text-align right
        &:hover
          background-color #F2F2F2
          cursor pointer
        .icon-arrow_down
          display inline
          height 100%
          font-size 12px
          margin-left 10px
        > img
          position absolute
          top: 10px
          right 38px
          display inline-block
          border-radius 50%
      .icon-add, .icon-notify
        display inline-block
        text-align center
        width 60px
        height 100%
        font-size 15px
        color #1a1a1a
        transition background-color .4s
        &:hover
          background-color #F2F2F2
          cursor pointer
</style>
