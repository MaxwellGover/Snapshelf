<template>
	
	<nav class="nav">
		<div class="container">
	  		<div class="nav-left">
	  			<a class="nav-item">
	      			<p>Products</p>
	    		</a>
	    		<a class="nav-item">
	      			<p>Settings</p>
	    		</a>
	    	</div>
	    	
	    	<div class=nav-center>
	      		<p class="title nav-item">Dashboard</p>
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
    name: 'DashboardNav',
    methods: {
    	goToSettings () {
    		router.push({ path: '/dashboard/settings'});
    	},
    	goToProducts () {
    		router.push({ path: '/dashboard/products'});
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