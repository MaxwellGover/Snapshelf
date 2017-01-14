<template>
	
	<nav class="nav">
		<div class="container">
	  		<div class="nav-left">

	  			<div class="nav-item is-touch is-hidden-desktop">
	      			<p class="title">My Account</p>
	    		</div>
	  			
	  			<!-- Hide on mobile -->
	  			<a class="nav-item is-hidden-touch" @click="goToSettings">
	      			<p>Account Details</p>
	    		</a>
	    		<a class="nav-item is-hidden-touch" @click="goToWishList">
	      			<p>Wishlist</p>
	    		</a>
	    	
	    	</div>
	    	
	    	<!-- Hide on mobile -->
	    	<div class="nav-center is-hidden-touch">
	      		<p class="title nav-item">My Account</p>
	    	</div>

	    	<span class="nav-toggle" @click="toggleMobileMenu">
          		<span></span>
          		<span></span>
          		<span></span>
        	</span>
	  		
	  		<div class="nav-right nav-menu" v-bind:class="{'is-active': active}">
		  		
		  		<!-- Hide home icon in mobile menu -->
		  		<span class="nav-item is-hidden-touch">
	      			<a class="home button" @click="backToHome">
						<span class="icon">
	  						<i class="fa fa-home fa-2x" aria-hidden="true"></i>
						</span>
					</a>
	      		</span>

	      		<!-- Mobile menu -->

	      		<a class="nav-item is-touch is-hidden-desktop"  @click="backToHome">
	      			Home
	      		</a>

	      		<a class="nav-item is-touch is-hidden-desktop"  @click="goToSettings">
	      			Account Details
	      		</a>

	      		<a class="nav-item is-touch is-hidden-desktop" @click="goToWishList">
	      			Wishlist
	      		</a>
		  		
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
import store from '../../store/index'

export default {
    name: 'UserAccountNav',
    data () {
    	return {
      		active: false
    	}
  	},
    methods: {
    	goToWishList () {
    		this.active = !this.active;
    		router.push({ path: '/account/wishlist'});
    	},
    	goToSettings () {
    		this.active = !this.active;
    		router.push({ path: '/account'});
    	},
    	backToHome () {
    		this.active = !this.active;
    		router.push({ path: '/'});
    	},
    	toggleMobileMenu () {
      		this.active = !this.active
    	},
    	signOut () {

			// Dispatches action that signs out current user and changes isAuthed to false. 

			firebase.auth().signOut().then(() => {
  				store.dispatch('signOut');
  				this.active = !this.active;
  				router.push({ path: '/' });
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

/* Mobile styles */
@media only screen and (max-width: 980px) {
	.title {
		margin-left: 10px
	}
}

</style>