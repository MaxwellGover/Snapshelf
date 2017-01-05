<template>
	<div>
		<dashboard-nav></dashboard-nav>
		
		<!-- Will display product and settings components -->
		<router-view></router-view>
	</div>
</template>

<script>
import DashboardNav from '../components/Dashboard/DashboardNav'
import { firebaseAuth } from '../firebase/constants'
import store from '../store/index'

export default {
    name: 'Dashboard',
    components: {
    	DashboardNav
    },
    created() {
    console.log(store.state.authentication);
    // Checks for a user and dispatches an action changing isAuthed state to true. 
    
    firebaseAuth.onAuthStateChanged(user => {
      console.log(user);
      store.dispatch('checkUser', user);
    }); 
  }
};

</script>

<style>
    
</style>