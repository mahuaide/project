<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<script>
  import router from './router'
  export default {
    mounted(){
    },
    watch:{
        '$route'(to,from){
          if (from.path === '/login' && this.$store.state.token) {
            this.$message({
              message: '欢迎回来！',
              type: 'success',
              duration:'2000'
            })
          }
        }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
