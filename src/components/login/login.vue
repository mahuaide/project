<template>
  <div class="login">
    <form @submit.stop.prevent="login">
      <input type="text" v-model="form.userName">
      <input type="password" v-model="form.userPwd">
      <button>登录</button>
    </form>
  </div>
</template>
<script type="text/ecmascript-6">
  import {login} from '../../http/api'
  import qs from 'qs'
  export default{
    data(){
      return {
        form: {
          userName: "",
          userPwd: ""
        }
      }
    },
    methods: {
      login(){
        var _this = this;
        login(this.form).then(function (res) {
          console.log(res);
          _this.$store.commit('login',res.data.respCode);
          let redirect = decodeURIComponent(_this.$route.query.redirect || '/');
          _this.$router.push({
            path: redirect
          })
        })
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .login
    position fixed
    top: 60px
    left: 0
    width 100%
    height 100%
    border 1px solid #ddd
    background-color #ddd
</style>
