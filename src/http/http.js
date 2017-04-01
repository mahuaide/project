/**
 * Created by Administrator on 2017/3/20.
 */
import axios from 'axios'
import store from '../store/store.js'
import * as types from '../store/type.js'
import router from '../router/index.js'

// axios 公共配置
axios.defaults.timeout = 5000;
// axios.defaults.baseURL = 'http://10.19.18.45:8080/cmp';
axios.defaults.withCredentials=true;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// http request 拦截器
axios.interceptors.request.use(
  config => {
    if (store.state.token) {
      axios.defaults.headers.common['Authorization'] = 'QMC'+store.state.token;
      console.log(axios.defaults.headers.common)
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  });

// http response 拦截器
axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 401 清除token信息并跳转到登录页面
          store.commit(types.LOGOUT);
          router.replace({
            path: '/login',
            query: {redirect: router.currentRoute.fullPath}
          })
      }
    }
    return Promise.reject(error.response.data)
  });
export default axios;
