<template>
	<div>
		<dashboard-nav></dashboard-nav>
		
		<!-- Will display product and settings components -->
		<router-view></router-view>
	</div>
</template>

<script>
import DashboardNav from '../components/Dashboard/DashboardNav'
import DashboardProducts from '../components/Dashboard/DashboardProducts'
import DashboardSettings from '../components/Dashboard/DashboardSettings'

export default {
    name: 'Dashboard',
    components: {
    	DashboardNav,
    	DashboardProducts,
    	DashboardSettings
    }
};

</script>

<style>
    
</style>