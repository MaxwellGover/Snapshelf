<template>
	
	<nav class="nav">
		<div class="container">
	  		<div class="nav-left">
	  			<a class="nav-item">
	      			<p>Settings</p>
	    		</a>
	    		<a class="nav-item">
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

export default {
    name: 'UserAccountNav',
    methods: {
    	goToWishList () {
    		router.push({});
    	},
    	goToSettings () {
    		router.push({});
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