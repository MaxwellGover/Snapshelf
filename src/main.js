// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import RegisterStore from './views/RegisterStore'
import store from './store/index'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.use(Vuex)

const routes = [
  { path: '/', component: App },
  { path: '/create-store-account', component: RegisterStore }
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
