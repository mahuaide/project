import Mock from 'mockjs'

import { nav } from './mock.nav.js'

function addToMock(list) {
  list.forEach(n => {
    Mock.mock(n.path, n.data)
  })
}
addToMock(nav)

export default Mock
