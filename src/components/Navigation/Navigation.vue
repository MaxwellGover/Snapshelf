<template>
	<!--TODO: Convert nav buttons into a dropdown -->
	<nav class="nav">
		
		<div class="container">
  		
  			<div class="nav-left">
    			<a class="nav-item" @click="goToHome">
      				<p class="title">Snapshelf</p>
    			</a>
  			</div>

  			<div class="nav-right">
  				<!-- If user not signed in show this -->
    			<span class="nav-item" v-if="!isAuthed">
      				<a class="button">
        				<span class="icon">
          					<i class="fa fa-tag fa-2x" aria-hidden="true"></i>
        				</span>
        				<span>Join Snapshelf</span>
      				</a>
      			</span>
      			
      			<!-- If user is signed in show this -->
      			<a class="nav-item" v-if="isRetailer" @click="goToDash()">
        			<span>Dashboard</span>
      			</a>
      			
      			<!-- Sign in -->
      			<span class="nav-item" v-if="!isAuthed">
      				<a class="button" @click="goToSignIn()">
        				<span>Sign In / Sign Up</span>
      				</a>
      			</span>
      			
      			<a class="nav-item" v-if="isAuthed && !isRetailer" @click="goToAccount">
      				{{displayName}}
      			</a>
      			
      			<!-- Sign out -->
      			<a class="nav-item" v-if="isAuthed" @click="signOut()">
      				Sign Out
      			</a>
      			
  			</div>

  		</div>
  	
  	</nav>	

</template>

<script>
import store from '../../store/index'
import { firebaseAuth, database } from '../../firebase/constants'
import router from '../../main'

export default {
	name: 'Navigation',
	computed: {
		
		// Accesses isAuthed state from Vuex store.
		// Whenever isAuthed value changes in Vuex store, computed property will re-evaluate and trigger DOM updates. 
		
		isAuthed () {
			return store.state.authentication.isAuthed
		},
		authId () {
			return store.state.authentication.authId	
		},
		isRetailer () {
			return store.state.authentication.isRetailer
		},
		displayName () {
			return store.state.authentication.displayName
		}
	},
	methods: {
		goToSignIn () {
			router.push({ path: '/login' })
		},
		goToDash () {
			router.push({ path: '/dashboard/products'});
		},
		goToAccount () {
			var user = firebaseAuth.currentUser;
			router.push({ path: '/account/' + user.uid})
		},
		goToHome () {
			router.push({ path: '/' })
		},
		signOut () {

			// Dispatches action that signs out current user and changes isAuthed to false. 

			firebaseAuth.signOut().then(() => {
  				store.dispatch('signOut');

  				router.push({ path: '/' })
			}, function(error) {
  				// An error happened.
			});
		}
	}
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Caveat');

.nav {
	padding-top: 10px;
	padding-bottom: 10px;
}

.title {
	font-family: 'Caveat', cursive;
	font-size: 32px;
}
</style>