<template>
	<div>
		<dashboard-nav></dashboard-nav>
		
		<!-- Will display product and settings components -->
		<router-view></router-view>
	</div>
</template>

<script>
import DashboardNav from '../components/Dashboard/DashboardNav'

export default {
    name: 'Dashboard',
    components: {
    	DashboardNav
    } 
};

</script>

<style>
    
</style>