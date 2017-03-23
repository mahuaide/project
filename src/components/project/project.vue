<template>
  <div class="wrapper">
    <div class="sub-menu">
      <div class="sub-menu-itme">
        <router-link to="/project/all">所有工程</router-link>
      </div>
      <div class="sub-menu-itme">
        <router-link to="/project/created">我创建的</router-link>
      </div>
      <div class="sub-menu-itme">
        <router-link to="/project/joined">我参与的</router-link>
      </div>
      <div class="sub-menu-itme">
        <router-link to="/project/archive">归档项目</router-link>
      </div>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
<script type="text/ecmascript-6">
  export default{}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .sub-menu
    width 200px
    height 100%
    overflow-y  auto
    border-right 1px solid #ccc
    position fixed
    z-index 999
    font-size 12px
    .sub-menu-itme
      width 100%
      text-align center
      >a
        display inline-block
        padding 10px 0
  .active
    color red
</style>
