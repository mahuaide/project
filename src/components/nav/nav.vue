<template>
  <div class="left-menu">
    <div class="menu-itme">
      <router-link to="/home/view"><img src="../../common/img/home.png"></router-link>
    </div>
    <div class="menu-itme">
      <router-link to="/home/project" class="iconfont icon-workflow">工作流</router-link>
    </div>
    <div class="menu-itme">
      <router-link to="/home/data" class="iconfont icon-data_center2">数据中心</router-link>
    </div>
    <div class="menu-itme">
      <router-link to="/home/baseline" class="iconfont icon-baseline_manage">基线管理</router-link>
    </div>
    <div class="menu-itme">
      <router-link to="/home/version" class="iconfont icon-version_manage">版本管理</router-link>
    </div>
    <div class="menu-itme">
      <router-link to="/home/configure" class="iconfont icon-configure_center">配置中心</router-link>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default{

  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .left-menu
    position fixed
    left 0
    top 60px
    width 80px
    height 100%
    overflow-y auto
    text-align center
    z-index 999
    background-color #fff
    .menu-itme
      width 100%
      height 54px
      >a
        display block
        width 100%
        height 100%
        font-size 12px
        color: #3d3d3d
        background-color #fff
        transition: background-color  .4s ease,color .4s ease;
      .icon-workflow:before ,.icon-data_center2:before , .icon-baseline_manage:before , .icon-version_manage:before ,
      .icon-configure_center:before
        display block
        padding 8px 0 4px
        font-size 20px
      :hover
        background-color #303030
        color: #fff
      .active
        color:#fff
        background-color #303030
</style>
