// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import store from './store/index'
import VueRouter from 'vue-router'

import Activate from './views/Activate'
import Dashboard from './views/Dashboard'
import DashboardProducts from './components/Dashboard/DashboardProducts'
import DashboardSettings from './components/Dashboard/DashboardSettings'
import Login from './views/Login'
import UserAccount from './views/UserAccount'
import UserWishlist from './components/UserAccount/UserWishlist'
import AccountSettings from './components/UserAccount/AccountSettings'
import Home from './views/Home'
import ProductProfile from './views/ProductProfile'
import CoatsDisplay from './components/Home/CoatsDisplay'
import NewItems from './components/Home/NewItems'

Vue.use(VueRouter)
Vue.use(Vuex)

const routes = [
  { path: '/', component: Home,
    children: [
      { path: '', component: NewItems },
      { path: 'coats', component: CoatsDisplay } 
    ]
  },
  { path: '/activate', component: Activate },
  { path: '/product/:productId', component: ProductProfile },
  { path: '/dashboard', component: Dashboard, 
    children: [ 
      { path: '', component: DashboardProducts },
      { path: 'settings', component: DashboardSettings }
    ]
  },
  { path: '/login', component: Login },
  { path: '/account', component: UserAccount,
    children: [
      { path: '', component: AccountSettings },
      { path: 'wishlist', component: UserWishlist}
    ]
  }
];

const router = new VueRouter({
  routes // short for routes: routes
});

export default router;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
