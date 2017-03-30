<template>
  <div class="wrapper clearfix">
    <div class="wrapper-left">
      <div class="project">
        <div class="top">
          <div class="left">我的项目</div>
          <div class="right">
            <span class=" iconfont icon-add">创建项目</span>
            <span>查看所有</span>
          </div>
        </div>
        <div class="bottom">
          <ul>
            <li>
              <span></span>
              <span>项目名称</span>
            </li>
          </ul>
          <div class="add">
            <span></span>
            <span>创建新项目</span>
          </div>
        </div>
      </div>
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
  .wrapper
    .wrapper-left
      float: left
      width 60%
      .project
        width 100%
        height 264px
        border 1px solid #e8e8e8
        background-color #fff
        .top
          width 95%
          height 40px
          margin-left 20px
          border-bottom  1px solid #e8e8e8
          .left
            float: left
            font-size 16px
            color #303030
            margin-top 15px
          .right
            float: right
            color #303030
            font-size 0px
            margin-top 17px
            span
              font-size 12px
            .icon-add:before
              font-size 9px
              margin-right 3px
            span:last-child
              color #0da4d3
              margin-left 18px
              background url("icon_arrow.gif") no-repeat 52px 2px
              padding-right 16px
        .bottom
          width 95%
          height 224px
          margin 14px 0 0 20px
          ul
            float: left
            li
              width 137px
              height 166px
              border-radius 3px
              background-color #fafafa
              padding 5px 0 0 5px
              text-align center
              span:first-child
                width 132px
                height 130px
                display block
                border-radius 3px
                background-color #d4f5f6
                background-image url("icon_project.gif")
                background-repeat no-repeat
                background-position 25px 28px
              span:last-child
                display block
                font-size 12px
                color #444
                margin-top 10px
          .add
            width 134px
            height 160px
            float: left
            text-align center
            margin-left 24px
            margin-top 5px
            span:first-child
              display block
              text-align center
              width 132px
              height 130px
              line-height 130px
              border 1px dashed #ccc
              border-radius 3px
              font-size 40px
              color #ecf0f1
              background url("icon_add.gif") no-repeat 47px 44px
            span:last-child
              display block
              font-size 12px
              color #444
              margin-top 10px
      .state
        width 100%
        height 689px
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
