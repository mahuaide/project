<template>
  <div class="wrapper clearfix">
    <div class="wrapper-left">
      <div class="project"></div>
      <div class="state"></div>
    </div>
    <div class="vacancy"></div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default{

  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .clearfix
    display block
  .wrapper
    padding 90px 26px 0 20px
    background-color #f1f5f8
    .wrapper-left
      float: left
      width 60%
      .project
        width 100%
        height 264px
        border: 1px solid #e8e8e8
        background-color #fff
      .state
        width 100%
        height 684px
        border 1px solid #e8e8e8
        margin-top 20px
        background-color #fff
    .vacancy
      float left
      width 38%
      height 538px
      border 1px solid #e8e8e8
      margin-left 20px
      background-color #fff
</style>
