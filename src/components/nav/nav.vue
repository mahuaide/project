<template>
  <div class="left-menu">
    <div class="menu-itme">
      <router-link to="/home/view">HOME</router-link>
    </div>
    <div class="menu-itme">
      <router-link to="/home/project">项目</router-link>
    </div>
    <div class="menu-itme">
      <router-link to="/home/task">任务</router-link>
    </div>
    <div class="menu-itme">
      <router-link to="/home/team">团队</router-link>
    </div>
    <div class="menu-itme">
      <router-link to="/home/friends">好友</router-link>
    </div>
    <div class="menu-itme">
      <router-link to="/home/notes">通知</router-link>
    </div>
    <div class="menu-itme">
      <router-link to="/home/privateLetter">私信</router-link>
    </div>
    <div class="menu-itme">
      <router-link to="/home/account">账户</router-link>
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
    font-size 14px
    border-right 1px solid #ddd
    z-index 999
    .menu-itme
      width 100%
      height auto
      >a
        border-bottom  1px solid #ddd
        display inline-block
        width 100%
        height 100%
        padding 10px 0
  .active
    color:#000
    font-weight 600
    background-color #ddd
</style>
