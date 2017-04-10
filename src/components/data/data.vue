<template>
  <div class="wrapper">
    <textProps :items="items"></textProps>
  </div>
</template>
<script type="text/ecmascript-6">
  import textProps from '../textProps/textProps.vue'
  import {getWorkflowState} from '../../http/api'
  export default{
    data(){
      return {
        items: []
      }
    },
    components:{
      textProps
    },
    created(){
      getWorkflowState().then((res)=>{
        this.items = res.data.beans;
      })
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
