<template>
	<div class="container">
		<login-box></login-box>
		<sign-up-box></sign-up-box>
	</div>
</template>

<script>
import LoginBox from '../components/Login/LoginBox'
import SignUpBox from '../components/Login/SignUpBox'

export default {
    name: 'Dashboard',
    components: {
    	LoginBox,
    	SignUpBox
    } 
};

</script>

<style>
.container {
	display: flex;
	justify-content: space-between;
	align-items: center
}
</style>