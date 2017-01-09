<template>
    <div id="app">
      <navigation v-show="showNav"></navigation>
      <ring-loader v-if="loading"></ring-loader>
      <router-view></router-view>
    </div>
</template>

<script>
import Navigation from './components/Navigation/Navigation'
import { firebaseAuth, database } from './firebase/constants'
import store from './store/index'
// TODO: Figure out when/how to display this.
import { RingLoader } from 'vue-spinner/dist/vue-spinner.min.js'

export default {
  name: 'app',
  components: {
    Navigation,
    RingLoader
  },
  watch: {
    $route: function () {
        var user = firebaseAuth.currentUser;
        // Check if given route is true, if it is then hide Nav. 
        if (user.uid && this.$route.path === "/dashboard/products" || this.$route.path === "/dashboard/settings"  || this.$route.path === `/account/${user.uid}`) {
            store.commit('hideNav');
            } else  {
            store.commit('showNav');
        }
    }
  },
  computed: {
    showNav () {    
      return store.state.navigation.showNav
    },
    loading () {
      return store.state.loading
    }
  },
  created () {
    
   // Checks for a user and dispatches an action changing isAuthed state to true. 
    
    firebaseAuth.onAuthStateChanged((user) => {
      console.log(store.state.authentication);
      console.log(user);
      store.dispatch('checkUser', user);
      
    // Prevents main nav from showing up on page refresh on any of below paths. 
    
    if (user.uid && this.$route.path === "/dashboard/products" || this.$route.path === "/dashboard/settings" || this.$route.path === `/account/${user.uid}`) {
        store.commit('hideNav');
        } else  {
        store.commit('showNav');
    }
    
      
    });
  }
};

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
