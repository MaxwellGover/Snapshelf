<template>
	<div class="container">
		<div class="login-container">
			<p class="header">SIGN IN</p>
			<login-box></login-box>
		</div>
		<div class="login-container">
			<p class="header">CREATE AN ACCOUNT</p>
			<sign-up-box></sign-up-box>
		</div>
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
@import url('https://fonts.googleapis.com/css?family=Montserrat');

.container {
	display: flex;
	justify-content: space-around;
	align-content: center;
}
.login-container {
	display: flex;
	flex-direction: column;
	margin-top: 80px;
}
.header {
	font-family: 'Montserrat', sans-serif;
	font-size: 28px;
}
</style>