<template>
	<div class="container">
		<login-box></login-box>
	</div>
</template>

<script>
import LoginBox from '../components/Login/LoginBox'

export default {
    name: 'Dashboard',
    components: {
    	LoginBox
    } 
};

</script>

<style>
.container {
	display: flex;
	justify-content: center;
	align-items: center
}
</style>