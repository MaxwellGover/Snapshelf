// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import store from './store/index'
import VueRouter from 'vue-router'

import Activate from './views/Activate'
import Dashboard from './views/Dashboard'
import Login from './views/Login'

Vue.use(VueRouter)
Vue.use(Vuex)

const routes = [
  { path: '/activate', component: Activate },
  { path: '/dashboard/:uid', name: 'dashboard', component: Dashboard },
  { path: '/login', component: Login }
]

const router = new VueRouter({
  routes // short for routes: routes
})

export default router;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
