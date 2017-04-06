<template>
  <div class="timerShaft">
    <ul v-for="item in workDate">
      <span>{{item.creatTimeA}}</span>
      <li>
        <span></span>
        <span></span>
        <span>{{item.creatTimeB}}</span>
        <span>
          <li></li>
          <li>
            <span>{{item.userName}}</span>
            <span>执行&nbsp;<span>{{item.workflowDemo}}</span>&nbsp;的&nbsp;<span>{{item.workflow}}</span>&nbsp;工作流</span>
          </li>
          <li>{{item.State}}</li>
        </span>
      </li>
    </ul>

  </div>
</template>

<script type="text/ecmascript-6">
  import {getWorkflowState} from '../../../http/api'
  import $ from 'jquery'
  export default{
    data () {
      return {
        workDate:[]
      }
    },
    created(){
      this.workflow();
    },
    methods: {
      workflow() {
        const _this = this;
        getWorkflowState().then(function (res) {
          const data = res.data.beans;
          const d = data;
          $(function () {
            $(data).each(function () {
                this.creatTimeA = _this.$time.dateToStr(new Date(this.executeTime) , 'yyyy-M-dd');
                this.creatTimeB = _this.$time.dateToStr(new Date(this.executeTime) , 'hh:mm');

            })
            _this.workDate = data;

          })
          console.log(_this.workDate);
        })
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
            background-color: #000
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
</style>
