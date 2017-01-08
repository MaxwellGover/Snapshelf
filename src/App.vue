<template>
    <div id="app">
      <navigation v-show="showNav"></navigation>
      <router-view></router-view>
    </div>
</template>

<script>
import Navigation from './components/Navigation/Navigation'
import { firebaseAuth, database } from './firebase/constants'
import store from './store/index'

export default {
  name: 'app',
  components: {
    Navigation
  },
  watch: {
    $route: function () {
        // Check if given route is true, if it is then hide Nav. 
        if (this.$route.path === "/dashboard/products" || this.$route.path === "/dashboard/settings") {
            store.commit('hideNav');
            } else  {
            store.commit('showNav');
        }
    }
  },
  computed: {
    showNav () {    
      return store.state.navigation.showNav
    }
  },
  created() {
    
    // Prevents main nav from showing up on page refresh from either of below paths. 
    if (this.$route.path === "/dashboard/products" || this.$route.path === "/dashboard/settings") {
        store.commit('hideNav');
        } else  {
        store.commit('showNav');
    }
    
    // Checks for a user and dispatches an action changing isAuthed state to true. 
    firebaseAuth.onAuthStateChanged(user => {
            
      console.log(store.state.authentication);
      console.log(user);
      store.dispatch('checkUser', user)
    })
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
