<template>
  <div class="wrapper">
    {{json}}
  </div>
</template>
<script type="text/ecmascript-6">
  import {test_http} from '../../http/api'
  export default{
    data(){
      return {
        json: ""
      }
    },
    created(){
        console.log("created")
    },
    mounted(){
      this.$nextTick(()=>{
        test_http().then((res)=>{
          this.json = res.data;
        })
      })
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
