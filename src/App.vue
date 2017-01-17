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

        // Check if given route is true, if it is then hide Nav. 
        
        if (this.$route.path === "/dashboard" || this.$route.path === "/dashboard/settings"  || this.$route.path === "/account" || this.$route.path === "/account/wishlist") {
            this.$store.commit('hideNav');
            } else  {
            this.$store.commit('showNav');
        }
    }
  },
  computed: {
    showNav () {    
      return this.$store.state.navigation.showNav
    },
    loading () {
      return this.$store.state.loading
    }
  },
  created () {
    
   // Checks for a user and dispatches an action changing isAuthed state to true. 
    
    firebaseAuth.onAuthStateChanged((user) => {
      console.log(this.$store.state.authentication);
      console.log(user);
      this.$store.dispatch('checkUser', user);
    });
  
    // Prevents main nav from showing up on page refresh on any of below paths. 
    
    if (this.$route.path === "/dashboard" || this.$route.path === "/dashboard/settings" || this.$route.path === "/account" || this.$route.path === "/account/wishlist") {
        this.$store.commit('hideNav');
        } else  {
        this.$store.commit('showNav');
    }
  }
};

</script>

<style>

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

</style>
