<template v-if="user.location">
	<div>
		<dashboard-nav></dashboard-nav>
		
		<!-- Will display product and settings components -->
		<router-view :user="user"></router-view>
	</div>
</template>

<script>
import DashboardNav from '../components/Dashboard/DashboardNav'

export default {
    name: 'Dashboard',
    components: {
    	DashboardNav
    },
    computed: {
        user () {
            return this.$store.state.authentication.user
        }
    }
};

</script>

<style>
    
</style>