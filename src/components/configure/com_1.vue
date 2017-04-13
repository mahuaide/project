<template>
  <div>
    <button @click="add">增加</button>
    <button @click="reduce">减少</button>
  </div>
</template>
<script type="text/ecmascript-6">
  import * as types from '../../store/type'
  export default{
    methods: {
      add(){
        this.$store.commit(types.ADD);
      },
      reduce(){
        this.$store.commit(types.REDUCE);
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
