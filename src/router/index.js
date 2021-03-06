import Vue from 'vue'
import store from '../store/store'
import Router from 'vue-router'
import {lsWrite,lsRead} from '../common/js/ls'
import version from '../components/version/version.vue'
import home from '../components/home/home.vue'
import configure from '../components/configure/configure.vue'
import project from '../components/project/project.vue'
import data from '../components/data/data.vue'
import baseline from '../components/baseline/baseline.vue'
import view from '../components/view/view.vue'
import projectAll from '../components/project/projectSub/projectAll.vue'
import created from '../components/project/projectSub/created.vue'
import joined from '../components/project/projectSub/joined.vue'
import archive from '../components/project/projectSub/archive.vue'
import login from '../components/login/login.vue'

Vue.use(Router)
if (lsRead('token')) {
  store.commit('login', lsRead('token'))
}

export default new Router({
  linkActiveClass: "active",
  // mode: 'history',
  routes: [
    {
      path: '/login',
      component: login
    },
    {
      path: '/home',
      component: home,
      children: [
        {path: 'view', component: view}
      ]
    },
    {
      path: '/home',
      component: home,
      children: [
        {path: 'version', component: version},
      ]
    },
    {
      path: '/home',
      component: home,
      children: [
        {path: 'configure', component: configure},
      ]
    },
    {
      path: '/home',
      component: home,
      children: [
        {path: 'baseline', component: baseline},
      ]
    },
    {
      path: '/home',
      component: home,
      children: [
        {path: 'project', component: project,
          children:[
            {path: 'all', component: projectAll},
            {path: 'created', component: created},
            {path: 'joined', component: joined},
            {path: 'archive', component: archive}
          ]
        },
      ]
    },
    {
      path: '/home',
      component: home,
      children: [
        {path: 'data', component: data},
      ]
    },
    {
      path: "/",
      redirect: {path: '/login'}
    }
  ]
})
