<template>
  <div id="home">
    <ai-header></ai-header>
    <ai-nav></ai-nav>
    <router-view></router-view>
  </div>
</template>
<script type="text/ecmascript-6">
  import {getLoginUser} from '../../http/api.js'
  import header from '../../components/header/header.vue'
  import nav from '../../components/nav/nav.vue'
  export default{
      data(){
        return {
          username:'',
          password:''
        }
      },
      methods:{
        fashe(){
          var _this =this;
          getLoginUser().then(function(res){
            _this.username = res.data.data.username;
            _this.password = res.data.data.password;
          })
        }
      },
      components:{
        'ai-header':header,
        'ai-nav':nav,
      }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
</style>
