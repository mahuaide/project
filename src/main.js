// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import mock from './mock'
import babelPolyfill from 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import axios from './http/http'
import ElementUI from 'element-ui'
import '../static/css/reset.css'
import './common/css/common.styl'
import './common/css/font.css'
import '../theme/index.css'  //element-UI自定义样式


Vue.prototype.$http = axios
Vue.use(ElementUI)

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
