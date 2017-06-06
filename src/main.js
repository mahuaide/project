// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import mock from './mock'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import axios from './http/http'
import ElementUI from 'element-ui'
import '../static/css/reset.css'
import './common/css/font.css'
import '../theme/index.css'  //element-UI自定义样式
import 'nprogress/nprogress.css' //进度条
import './common/css/common.styl'
import filters from './filters' //自定义过滤器，挂在到Vue全局

Object.keys(filters).forEach(key => Vue.filter(key, filters[key]))
Vue.prototype.$http = axios
Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
})
