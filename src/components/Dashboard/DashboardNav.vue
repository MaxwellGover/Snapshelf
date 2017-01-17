<template>
	
	<nav class="nav">
		<div class="container">
	  		<div class="nav-left">
	  			<a class="nav-item" @click="goToProducts">
	      			<p>Products</p>
	    		</a>
	    		<a class="nav-item" @click="goToSettings">
	      			<p>Settings</p>
	    		</a>
	    	</div>
	    	
	    	<div class=nav-center>
	      		<p class="title nav-item">Dashboard</p>
	    	</div>
	    	
	    	<div class="nav-right">
	    	
		    	<span class="nav-item">
	      			<a class="home button" @click="backToHome">
						<span class="icon">
	  						<i class="fa fa-home fa-2x" aria-hidden="true"></i>
						</span>
					</a>
		      	</span>
		  		
		  		<!-- Sign out -->
	      		<a class="nav-item" @click="signOut">
	      			Sign Out
	      		</a>
	  		
	  		</div>
  		
  		</div>
  	</nav>

</template>

<script>
import router from '../../router/index'
import firebase from 'firebase'

export default {
    name: 'DashboardNav',
    methods: {
    	goToSettings () {
    		router.push({ path: '/dashboard/settings'});
    	},
    	goToProducts () {
    		router.push({ path: '/dashboard'});
    	},
    	backToHome () {
    		router.push({ path: '/'});
    	},
    	signOut () {

			// Dispatches action that signs out current user and changes isAuthed to false. 

			firebase.auth().signOut().then(() => {
  				this.$store.dispatch('signOut');

  				router.push({ path: '/' })
			}, function(error) {
  				// An error happened.
			});
		}
    }
};

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Caveat');

.title {
	font-family: 'Caveat', cursive;
	font-size: 32px;
}

.home {
	border-left: none;
	border-top: none;
	border-bottom: none;	
}

</style>