<template>
  <div id="app">
    <ai-header></ai-header>
    <div class="left-menu" v-show="this.$store.state.token">
      <div class="menu-itme">
        <router-link to="/home">HOME</router-link>
      </div>
      <div class="menu-itme">
        <router-link to="/project/all">项目</router-link>
      </div>
      <div class="menu-itme">
        <router-link to="/task">任务</router-link>
      </div>
      <div class="menu-itme">
        <router-link to="/team">团队</router-link>
      </div>
      <div class="menu-itme">
        <router-link to="/friends">好友</router-link>
      </div>
      <div class="menu-itme">
        <router-link to="/notes">通知</router-link>
      </div>
      <div class="menu-itme">
        <router-link to="/privateLetter">私信</router-link>
      </div>
      <div class="menu-itme">
        <router-link to="/account">账户</router-link>
      </div>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  import header from './components/header/header.vue'
  console.log(22222);
  export default {
    components: {
      'ai-header': header
    }
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
