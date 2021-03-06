/**
 * Created by Administrator on 2017/3/20.
 */
import axios from 'axios'
import store from '../store/store.js'
import * as types from '../store/type.js'
import router from '../router/index.js'
import nprogress from 'nprogress'
nprogress.configure({
  speed: 500,
  showSpinner: false,
})
// axios 公共配置
axios.defaults.timeout = 50000;
axios.defaults.baseURL = "http://localhost:8080"
axios.defaults.withCredentials = true;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// http request 拦截器
axios.interceptors.request.use(
  config => {
    nprogress.start();
    if (store.state.token) {
      config.headers.authorization = store.state.token;
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  });

// http response 拦截器
axios.interceptors.response.use(
  response => {
    nprogress.done();
    return response;
  },
  error => {
    nprogress.done();
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 401 清除token信息并跳转到登录页面
          if (router.currentRoute.path != '/login') {
            store.commit(types.LOGOUT);
            router.replace({
              path: '/login',
              query: {redirect: router.currentRoute.fullPath}
            })
          }
      }
    }
    return Promise.reject(error)
  });
export default axios;
