<template>
  <div class="wrapper">
    <button @click="fashe">HOME发射</button>
    <p>用户名：{{username}}</p>
    <p>密码：{{password}}</p>
    <p>用户信息:{{this.$store.state.user.data}}</p>
  </div>
</template>
<script type="text/ecmascript-6">
  import {getLoginUser} from '../../http/api.js'
  export default{
      data(){
        return {
          username:'',
          password:''
        }
      },
      methods:{
        fashe(){
            console.log(1);
          var _this =this;
          getLoginUser().then(function(res){
            _this.username = res.data.data.username;
            _this.password = res.data.data.password;
          })
        }
      }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
</style>
