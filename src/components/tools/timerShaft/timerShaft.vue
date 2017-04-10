<template>
  <div class="timerShaft">
    <ul v-for="item in shaftData">
      <span v-show="item.creatTimeA">{{item.creatTimeA}}</span>
      <li>
        <span></span>
        <span v-show="item.creatTimeA"></span>
        <span>{{item.creatTimeB}}</span>
        <span>
          <li><img :src="item.userUri"></li>
          <li>
            <span>{{item.userName}}</span>
            <span>执行&nbsp;<span>{{item.workflowDemo}}</span>&nbsp;的&nbsp;<span>{{item.workflow}}</span>&nbsp;工作流</span>
          </li>
          <li :class="item.classState">{{item.State}}</li>
        </span>
      </li>
    </ul>

  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    props:['shaftData'],
    watch:{
      shaftData: function () {
          var _this = this;
          this.shaftData.forEach(function (o) {
            o.creatTimeA = _this.$time.dateToStr(new Date(o.executeTime) , 'yyyy-M-dd');
            o.creatTimeB = _this.$time.dateToStr(new Date(o.executeTime) , 'hh:mm');
            if(o.State == 1) {
              o.State = '未完成';
              o.classState = 'finish';
            }else if(o.State == 2){
              o.State = '正在进行';
              o.classState = 'nofinish';
            }else if(o.State == 3){
              o.State ='完成';
              o.classState = 'underway';
            }
          })
          var dataB = this.shaftData[0].creatTimeA
          this.shaftData.forEach(function (o) {
            if(o.creatTimeA == dataB){
              delete o.creatTimeA
            }else if(o.creatTimeA !== dataB){
              dataB = o.creatTimeA;
            }
          })
          this.shaftData[0].creatTimeA = dataB;
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .timerShaft
    width 95%
    margin-left 20px
    ul
      font-size 0px
      > span
        display block
        font-size 14px
        color #303030
        margin-bottom 19px
        margin-top 19px
      li:last-child
      > li
        position relative
        height 74px
        > span
          position absolute
          display block
        > span:first-child
          width 7px
          height 7px
          border-radius 50%
          background-color: #0da4d4
        > span:nth-child(2)
          width 1px
          height 67px
          background-color: #0da4d4
          top 7px
          left 3px
        > span:nth-child(3)
          font-size 12px
          color #303030
          left 21px
        > span:last-child
          width 92%
          height 62px
          background-color: #fcfcfc
          left 64px
          li:first-child
            display inline-block
            width 20px
            height 20px
            border-radius 50%
            position absolute
            top 4px
            left 5px
            background-color: skyblue
            img
              border-radius 50%
          li:nth-child(2)
            position absolute
            width 80%
            left 34px
            top 7px
            > span:first-child
              display block
              font-size 13px
              color #0da4d4
            > span:nth-child(2)
              display block
              width 80%
              font-size 12px
              color #303030
              margin-top 8px
              > span
                color #0da4d4
          li:last-child
            height 17px
            line-height 17px
            font-size 12px
            color #303030
            position absolute
            right 14px
            bottom 7px
            padding-left 30px
          .finish
            background url("finish.gif") no-repeat
          .nofinish
            background url("nofinish.gif") no-repeat
          .underway
            background url("underway.gif") no-repeat
</style>
