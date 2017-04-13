<template>
  <div>
    {{counter}}
  </div>
</template>
<script type="text/ecmascript-6">
  import {mapGetters} from 'vuex'
  export default{
    computed:{
      ...mapGetters([
          'counter'
      ])
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
