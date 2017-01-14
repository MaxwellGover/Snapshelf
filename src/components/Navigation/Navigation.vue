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
  				<!--
    			<span class="nav-item" v-if="user.isAuthed === false">
      				<a class="button">
        				<span class="icon">
          					<i class="fa fa-tag fa-2x" aria-hidden="true"></i>
        				</span>
        				<span>Join Snapshelf</span>
      				</a>
      			</span>
      			-->
      			
      			<!-- If user is signed in show this -->
      			<a class="nav-item" v-if="user.isRetailer === true" @click="goToDash">
        			<span>Dashboard</span>
      			</a>
      			
      			<!-- Sign in -->
      			<span class="nav-item" v-if="user.isAuthed === false">
      				<a class="button" @click="goToSignIn">
        				<span>Sign In / Sign Up</span>
      				</a>
      			</span>
      			
      			<span class="nav-item" v-if="user.isAuthed === true && user.isRetailer === false">
	      			<a class="wishlist-icon button" @click="goToWishlist">
						<span class="icon">
	  						<i class="fa fa-star" aria-hidden="true"></i>
						</span>
						<span>0</span>
					</a>
      			</span>
      			
      			<a class="nav-item" v-if="user.isAuthed === true && user.isRetailer === false" @click="goToAccount">
      				{{user.displayName}}
      			</a>
      			
      			<!-- Sign out -->
      			<a class="nav-item" v-if="user.isAuthed === true" @click="signOut">
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
		
		user () {
			return store.state.authentication.user
		}
	
	},
	methods: {
		goToSignIn () {
			router.push({ path: '/login' })
		},
		goToDash () {
			router.push({ path: '/dashboard'})
		},
		goToAccount () {
			router.push({ path: '/account'})
		},
		goToWishlist () {
			router.push({ path: '/account/wishlist'})
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

.wishlist-icon {
	border-left: none;
	border-top: none;
	border-bottom: none;
}
</style>