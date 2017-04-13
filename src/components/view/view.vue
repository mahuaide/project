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
      <div class="state">
        <div class="dynamic">动态</div>
        <ai-timer :shaftData="shaftData"></ai-timer>
      </div>
    </div>
    <div class="vacancy">
      <div class="colume-wrapper" style="width:100%;">
      <div ref="colume" style="width:100%;height: 300px;">
      </div>
      <ul class="colume-switch clearfix">
        <li v-for="(item,index) in colome_switch" @click="_colume(index)" :class="{selected:item.active}">
          {{item.name}}
        </li>
      </ul>
    </div>
      <div class="summary">总构建次数<span>52</span>次，构建时长<span>2小时40分20</span>秒，平均时长<span>1分50秒</span></div>
      <div class="piechart_switch" style="width:100%;">
        <div ref="piechart" style="width: 100%; height: 300px;">

        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import {getWorkflowState} from '../../http/api'
  import timerShaft from '../tools/timerShaft/timerShaft.vue'
  import echarts from 'echarts'

  export default{
    data() {
      return {
        shaftData: [
          {}
        ],
        colome_switch: [
          {name: '开发环境', active: true},
          {name: '测试环境', active: false},
          {name: '生产环境', active: false}
        ],
        kaifa_data: [
          {
            name: '成功',
            type: 'bar',
            stack: '开发环境',
            data: [1, 2, 3, 4, 5, 6, 7],
            itemStyle: {
              normal: {
                color:'#0da4d3'
              }
            }
          },
          {
            name: '部分成功',
            type: 'bar',
            stack: '开发环境',
            data: [1, 2, 3, 4, 5, 6, 7],
            itemStyle: {
              normal: {
                color:'#d4f5f6'
              }
            }
          },
          {
            name: '失败',
            type: 'bar',
            stack: '开发环境',
            data: [1, 2, 3, 4, 5, 6, 7],
            itemStyle: {
              normal: {
                color:'#fb7f4a'
              }
            }
          }
        ],
        ceshi_data: [
          {
            name: '成功',
            type: 'bar',
            stack: '测试环境',
            data: [10, 20, 30, 40, 50, 60, 70],
            itemStyle: {
              normal: {
                color:'#0da4d3'
              }
            }
          },
          {
            name: '部分成功',
            type: 'bar',
            stack: '测试环境',
            data: [61, 72, 83, 84, 95, 96, 87],
            itemStyle: {
              normal: {
                color:'#d4f5f6'
              }
            }
          },
          {
            name: '失败',
            type: 'bar',
            stack: '测试环境',
            data: [11, 21, 13, 24, 35, 46, 57],
            itemStyle: {
              normal: {
                color:'#fb7f4a'
              }
            }
          }
        ],
        shengchan_data: [
          {
            name: '成功',
            type: 'bar',
            stack: '生产环境',
            data: [101, 202, 130, 340, 650, 760, 780],
            itemStyle: {
              normal: {
                color:'#0da4d3'
              }
            }
          },
          {
            name: '部分成功',
            type: 'bar',
            stack: '生产环境',
            data: [111, 21, 13, 24, 35, 46, 57],
            stack: '测试环境',
            data: [61, 72, 2, 841, 95, 96, 87],
            itemStyle: {
              normal: {
                color:'#d4f5f6'
              }
            }
          },
          {
            name: '失败',
            type: 'bar',
            stack: '生产环境',
            data: [61, 72, 2, 841, 95, 96, 87],
            stack: '测试环境',
            data: [111, 21, 13, 24, 35, 46, 57],
            itemStyle: {
              normal: {
                color:'#fb7f4a'
              }
            }
          }
        ],
        piechart_switch:[
          {value:335, name:'成功'},
          {value:310, name:'部分成功'},
          {value:234, name:'失败'}
        ]
      }
    },
    created () {
      getWorkflowState().then((res) => {
        this.shaftData = res.data.beans

      })
    },
    mounted(){
      this.$nextTick(function () {
        this._colume(0);
        this._colume(0)
        this._piechart()
      })
    },
    methods: {
      _colume(index){
        this.colome_switch.forEach((item, num) => {
          num == index ? item.active = true : item.active = false
        })
        echarts.init(this.$refs.colume).setOption({
          title: {
            text: '一周构建时长',
            x: 'center',
            y: 'top'
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['成功', '失败', '部分成功'],
            x: 'center',
            y: 'bottom'
          },
          calculable: true,
          xAxis: [
            {
              type: 'category',
              data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            }
          ],
          yAxis: [
            {
              type: 'value',
              name: '单位（秒）'
            }
          ],
          series: index == 0 ? this.kaifa_data : index == 1 ? this.ceshi_data : this.shengchan_data
        })
      },
      _piechart () {
        echarts.init(this.$refs.piechart).setOption({
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
          },
          color: ['#0da4d3', '#d4f5f6', '#fb7f4a'],
          legend: {
            orient: 'horizontal',
            y: 'bottom',
            data:['成功','部分成功','失败']
          },
          series: [
            {
              name:'访问来源',
              type:'pie',
              radius: ['50%', '70%'],
              avoidLabelOverlap: false,
              label: {
                normal: {
                  show: false,
                  position: 'center'
                },
                emphasis: {
                  show: true,
                  textStyle: {
                    fontSize: '30',
                    fontWeight: 'bold'
                  }
                }
              },
              labelLine: {
                normal: {
                  show: false
                }
              },
              data:this.piechart_switch
            }
          ]
        })
      }
    },

    components: {'ai-timer': timerShaft}
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
          border-bottom 1px solid #e8e8e8
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
        .dynamic
          width 95%
          height 40px
          margin-left 20px
          border-bottom 1px solid #e8e8e8
          line-height 40px
          font-size 16px
          color: #303030
    .vacancy
      float left
      width 38%
      border 1px solid #e8e8e8
      margin-left 20px
      background-color #fff
      .colume-switch
        width 51%
        margin 0 auto
        > li
          float left
          width 32.3%
          height 30px
          line-height 30px
          text-align center
          border 1px solid #ddd
          font-size 12px
          &:hover
            cursor pointer
        .selected
          background-color #ddd
      .summary
        font-size 12px
        margin-top 20px
        text-align center
        span
          color: #0da4d3


</style>
