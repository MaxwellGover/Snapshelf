<template v-if="user.location">
	<div>
		<dashboard-nav></dashboard-nav>
		
		<!-- Will display product and settings components -->
		<router-view :user="user"></router-view>
	</div>
</template>

<script>
import DashboardNav from '../components/Dashboard/DashboardNav'
import store from '../store/index'

export default {
    name: 'Dashboard',
    components: {
    	DashboardNav
    },
    computed: {
        user () {
            return store.state.authentication.user
        }
    }
};

</script>

<style>
    
</style>