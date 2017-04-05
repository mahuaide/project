import Mock from 'mockjs'
import http from '../http/http'
import { nav } from './mock.nav.js'

const baseUrl = http.defaults.baseURL;
function addToMock(list) {
  list.forEach(n => {
    Mock.mock(baseUrl+n.path, n.data)
  })
}
addToMock(nav)

export default Mock
