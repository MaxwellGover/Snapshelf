<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import {firebaseAuth} from './firebase/constants'
import store from './store/index'

export default {
  name: 'app',
  created() {
    
    // Checks for a loggin in user and dispatches an action. 
    
    firebaseAuth.onAuthStateChanged(user => {
      console.log('Dispatching checkUser action!')
      store.dispatch('checkUser', {
        payload: user
      });
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
  margin-top: 60px;
}
</style>
