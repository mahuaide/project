<template>
  <div class="wrapper">
    {{obj.json}}
    <br/>
    <div ref="div">{{obj.text}}</div>
    <button @click="haha">按钮</button>
  </div>
</template>
<script type="text/ecmascript-6">
  import {test_http} from '../../http/api'
  export default{
    data(){
      return {
        obj: {
          json: ""
        }
      }
    },
    created(){
    },
    mounted(){
      test_http().then((res) => {
        this.obj.json = res.data;
      })
      this.$set(this.obj, 'text', '1');
      console.log("实际DOM" + this.$refs.div.innerHTML);
      this.$nextTick(() => {
        console.log("异步更新后DOM" + this.$refs.div.innerHTML);
      })
    },
    methods: {
      haha(){
        this.obj.text = 1111
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
