// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import mock from './mock'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import axios from './http/http';
import '../static/css/reset.css'
import '../static/css/common.css'
Vue.prototype.$http = axios
console.log(12345)

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  var { auth = true } = to.meta;
  var isLogin = Boolean(store.state.token)
  if (auth && !isLogin && to.path !== '/login') {
    return next({ path: '/login',query: {redirect: to.fullPath} })
  }
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
})
