import Vue from 'vue'
import store from '../store/store'
import Router from 'vue-router'
import account from '../components/account/account.vue'
import friends from '../components/friends/friends.vue'
import branch2 from '../components/branch2/branch2.vue'
import home from '../components/home/home.vue'
import notes from '../components/notes/notes.vue'
import privateLetter from '../components/privateLetter/privateLetter.vue'
import project from '../components/project/project.vue'
import task from '../components/task/task.vue'
import team from '../components/team/team.vue'
import projectAll from '../components/project/projectSub/projectAll.vue'
import created from '../components/project/projectSub/created.vue'
import joined from '../components/project/projectSub/joined.vue'
import archive from '../components/project/projectSub/archive.vue'
import login from '../components/login/login.vue'

Vue.use(Router)
if (window.localStorage.getItem('token')) {
  store.commit('login', window.localStorage.getItem('token'))
}

export default new Router({
  linkActiveClass: "active",
  mode: 'history',
  routes: [
    {
      path: '/login',
      component: login
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/account',
      component: account
    },
    {
      path: '/friends',
      component: friends
    },
    {
      path: '/branch2',
      component: branch2
    },
    {
      path: '/notes',
      component: notes
    },
    {
      path: '/privateLetter',
      component: privateLetter
    },
    {
      path: '/project',
      component: project,
      children: [
        {path: 'all', component: projectAll},
        {path: 'created', component: created},
        {path: 'joined', component: joined},
        {path: 'archive', component: archive}
      ]
    },
    {
      path: '/task',
      component: task
    },
    {
      path: '/team',
      component: team
    },
    {
      path: "/",
      redirect: "/home"
    }
  ]
})
