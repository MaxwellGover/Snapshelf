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
          					<div data-icon="ei-tag" data-size="s"></div>
        				</span>
        				<span>Join Snapshelf</span>
      				</a>
      			</span>
      			
      			<!-- If user is signed in show this -->
      			<span class="nav-item" v-if="isRetailer">
      				<a class="button" @click="goToDash()">
        				<span>Dashboard</span>
      				</a>
      			</span>
      			<span class="nav-item" v-if="isRetailer">Or</span>
      			
      			<!-- Sign in -->
      			<span class="nav-item" v-if="!isAuthed">
      				<a class="button" @click="goToSignIn()">
        				<span>Sign In / Sign Up</span>
      				</a>
      			</span>
      			
      			<!-- Sign out -->
      			<span class="nav-item" v-if="isAuthed">
      				<a class="button" @click="signOut()">
        				<span>Sign Out</span>
      				</a>
      			</span>
  			</div>

  		</div>
  	
  	</nav>	

</template>

<script>
import store from '../../store/index'
import { firebaseAuth } from '../../firebase/constants'
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
		}
	},
	methods: {
		goToSignIn () {
			router.push({ path: '/login' })
		},
		goToDash () {
			router.push({ path: '/dashboard/products'});
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
@import url('https://fonts.googleapis.com/css?family=Julius+Sans+One');

.title {
	font-family: 'Julius Sans One', sans-serif;
	margin-left: 10px
}
</style>