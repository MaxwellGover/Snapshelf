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
	    		<a class="nav-item">
	      			<p>Dashboard</p>
	    		</a>
	    	</div>
	    		
	    	<div class="nav-right">
	   	 		<a class="nav-item" @click="backToHome()">
	      			<p>Back to Snapshelf</p>
	    		</a>
	    		<a class="nav-item" @click="backToHome()">
	    			<i class="fa fa-home fa-2x" aria-hidden="true"></i>
	    		</a>
	  		</div>
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

<style>
    
</style>