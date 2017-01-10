<template>
	
	<nav class="nav">
		<div class="container">
	  		<div class="nav-left">
	  			<a class="nav-item" @click="goToSettings">
	      			<p>Account Details</p>
	    		</a>
	    		<a class="nav-item" @click="goToWishList">
	      			<p>Wishlist</p>
	    		</a>
	    	</div>
	    	
	    	<div class=nav-center>
	      		<p class="title nav-item">My Account</p>
	    	</div>
	    		
	    	<div class="nav-right">
	    		<a class="nav-item" @click="backToHome()">
	    			<i class="fa fa-home fa-2x" aria-hidden="true"></i>
	    		</a>
	  		</div>
	  	
  		</div>
  	</nav>

</template>

<script>
import router from '../../main'
import Vue from 'vue'
import VueFire from 'vuefire'

// explicit installation required in module environments
Vue.use(VueFire)

export default {
    name: 'UserAccountNav',
    methods: {
    	goToWishList () {
    		router.push({ path: '/account/wishlist'});
    	},
    	goToSettings () {
    		router.push({ path: '/account/settings'});
    	},
    	backToHome () {
    		router.push({ path: '/'});
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

</style>