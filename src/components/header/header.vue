<template>
  <div class="header">
    <div class="header-img">
      <span>
        <img src="./logo.png" alt="logo" width="38px" height="38px">
      </span>
    </div>
    <input type="text" class="search" placeholder="Search..." v-show="this.$store.state.token">
    <div class="header-middle" @click="getUser">
      <span class="project-name">运营商项目</span>
      <span class="iconfont icon-arrow_down"></span>
    </div>
    <div class="header-right">
      <span class="iconfont icon-add"></span>
      <span class="iconfont icon-notify"></span>
      <!--<el-dropdown>-->
      <!--<span class="el-dropdown-link">-->
      <!--<div class="header-user">-->
      <!--<img src="./logo.png" alt="user" width="38px" height="38px">-->
      <!--<span class="iconfont icon-arrow_down"></span>-->
      <!--</div>-->
      <!--</span>-->
      <!--<el-dropdown-menu slot="dropdown">-->
      <!--<el-dropdown-item>退出</el-dropdown-item>-->
      <!--</el-dropdown-menu>-->
      <!--</el-dropdown>-->
      <div class="header-user" @mouseover="showConfig" @mouseout="hideConfig">
        <img src="./logo.png" alt="user" width="38px" height="38px">
        <span class="iconfont icon-arrow_down"></span>
        <ul class="drop-down-list" v-show="config_show">
          <li @click="clickConfig('out')">退出</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import {logout,getLoginUser} from '../../http/api'
  import * as types from '../../store/type'
  export default{
    data(){
      return {
        config_show: false
      }
    },
    methods: {
      getUser(){
        getLoginUser().then(res=>{
            console.log(res.data);
        })
      },
      showConfig(){
        this.config_show = true;
      },
      hideConfig(){
        this.config_show = false;
      },
      clickConfig(option){
        if (option == 'out') {
          let _this = this;
          logout().then(function (res) {
            _this.$store.commit('logout');
            _this.config_show = false;
            _this.$router.replace({
              path: '/login'
            })
          })
        }
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  headerBackGroundColor = #303030
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
      margin-left 22px
      span
        display table-cell
        vertical-align middle
    .search
      position absolute
      top: 18px
      margin-left 22px
      width 120px
      border none
      border-bottom 1px solid #8a8a8a
      background-color headerBackGroundColor
      font-size fontSize
      outline: 0
      font-family fontFamily
      padding: 2px 20px 2px 2px
      vertical-align middle
      transition width .4s
      background url('./nav_search_focus.png') no-repeat right center
      background-size 14px 14px
      z-index 10001
      color: #fff
      &:focus
        width: 200px
        background-image url('./nav_search.png')
        border-bottom-color #CCCCCC
    .header-middle
      position relative
      text-align center
      line-height 60px
      z-index 999
      color #c8c8c8
      .project-name
        color #c8c8c8
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
        color #c8c8c8
        transition color .4s
        .drop-down-list
          position absolute
          right 0
          bottom -36px
          border 1px solid #ddd
          min-width 90px
          background-color #fff;
          color #000
          text-align left
          font-size 14px
          box-shadow 2px 2px 5px #ddd
          > li
            border-bottom 1px solid #ddd
            padding 0 10px
            height 34x;
            line-height 34px
            &:hover
              background-color #ddd
        &:hover
          color #1a1a1a
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
        color #c8c8c8
        transition background-color .4s, color .4s
        &:hover
          color #1a1a1a
          background-color #F2F2F2
          cursor pointer
</style>
