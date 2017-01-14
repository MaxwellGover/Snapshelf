<template>

	<div>

		<div class="tabs is-centered is-touch">
  			<ul>
    			<li @click="renderLogin" v-bind:class="{'is-active': loginActive}"><a>Login</a></li>
    			<li @click="renderRegister" v-bind:class="{'is-active': registerActive}"><a>Register</a></li>
  			</ul>
		</div>

	
		<login-box v-show="showLogin"></login-box>
		<sign-up-box v-show="showSignUp"></sign-up-box>

	</div>

</template>

<script>
import LoginBox from '../components/Login/LoginBox'
import SignUpBox from '../components/Login/SignUpBox'

export default {
    name: 'Dashboard',
    data () {
    	return {
    		showLogin: true,
    		showSignUp: false,
    		loginActive: true,
    		registerActive: false
    	}
    },
    methods: {
    	renderRegister () {
    		this.showLogin = false;
    		this.loginActive = false;
    		this.registerActive = true;
    		this.showSignUp = true;
    	},
    	renderLogin () {
    		this.showLogin = true;
    		this.loginActive = true;
    		this.registerActive = false;
    		this.showSignUp = false;
    	}
    },
    components: {
    	LoginBox,
    	SignUpBox
    } 
};

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Caveat');

.tabs {
	background-color: #fff;
	border-bottom-color: #000;
	font-size: 16px;
}


/* Mobile styles */
@media only screen and (max-width: 980px) {

	.tabs {
		background-color: #fff;
		border-bottom-color: #000
	}

}
</style>