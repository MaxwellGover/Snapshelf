<template>
	<div>
		<div>
			<p class="header">SIGN IN</p>
		</div>
		<div class="sign-in container">
			<div class="login-container">
				<login-box></login-box>
			</div>
			<div class="login-container">
				<sign-up-box></sign-up-box>
			</div>
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

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Caveat');

.sign-in {
	display: flex;
	justify-content: space-around;
}
.login-container {
	display: flex;
	flex-direction: column;
}
.header {
	font-family: 'Caveat', cursive;
	font-size: 28px;
	margin-top: 80px;
	margin-bottom: 20px;
	margin-left: 90px;
}
</style>