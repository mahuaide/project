<template>
  <div class="login" ref="login">
    <div class="login-form">
      <h2>用户登录</h2>
      <el-form :rules="rules" ref="form" :model="form">
        <el-form-item prop="username">
          <el-input type="text" v-model="form.username" placeholder="用户名" size="large"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" v-model="form.password" placeholder="密码" size="large"></el-input>
        </el-form-item>
        <button @click.prevent="login">登录</button>
      </el-form>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import {login} from '../../http/api';
  const staticImgLoginFile = 5
  export default{
    data(){
      return {
        form: {
          username: "",
          password: ""
        },
        rules: {
          username: [{required: true, message: '请输入用户名', trigger: 'blur'}],
          password: [{required: true, message: '请输入密码', trigger: 'blur'}]
        },
      }
    },
    methods: {
      login(){
        var _this = this;
        this.$refs.form.validate((valid) => {
          if (valid) {
            login(this.form).then(function (res) {
              _this.$store.commit('login', `${res.data.content.userId}_${res.data.content.token}`);
              let redirect = decodeURIComponent(_this.$route.query.redirect || '/home/view');
              _this.$router.replace({
                path: redirect
              })
              //window.location.href = redirect;
            })
          } else {
            return false;
          }
        });
      }
    },
    mounted(){
      this.$refs.login.style.background = `url(/static/img/login/${Math.floor(Math.random() * staticImgLoginFile + 1)}.jpg) 50% 50%/cover no-repeat fixed`;
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .login
    display: flex;
    align-items: center;
    position: absolute;
    top: 0
    left: 0
    width 100%
    height 100%
    .login-form
      margin 0 auto
      vertical-align middle
      padding 30px 40px
      width 400px
      height 280px
      border-radius 5px
      background-color rgba(255, 255, 255, 0.7)
      > h2
        font-size: 25px;
        font-weight: 400;
        text-align: center;
        color: #323a45;
        margin-bottom 25px
        font-weight 600
      button
        margin-top 20px
        width: 400px;
        height: 48px;
        border: none;
        background-color: #323a45;
        color: #fff;
        font-size: 24px;
        border-radius: 24px;
        cursor: pointer;
        transition: opacity .3s ease;
        &:hover
          opacity 0.9

</style>
