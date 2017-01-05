<template>
	
	<div class="tabs container">

		<ul>
	    	<li class="is-active" @click="goToProducts"><a>New Products</a></li>
	    	<li @click="goToSettings"><a>Settings</a></li>
	  	</ul>
	
	</div>   

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
    	}
    }
};

</script>

<style>
    
</style>