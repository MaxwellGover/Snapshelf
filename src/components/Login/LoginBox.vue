<template>
	
	<div class="box">

		<p>LOGIN</p>
		
		<label class="label">EMAIL</label>
        <p class="control">
          <input class="input is-medium" type="email" v-model="retailerEmail">
        </p>
        <small>This should be the email you provided Snapshelf when you applied.</small>
        
        <label class="label">PASSWORD</label>
        <p class="control">
          <input class="input is-medium" type="password" v-model="retailerPassword">
        </p>
        <small>This should be the password that was provided to you in your confirmation email.</small>
        
        <a class="button is-light" @click="signIn()">LOGIN</a>
	
	</div>

</template>

<script>

import { firebaseAuth } from '../../firebase/constants'
import store from '../../store/index'
import router from '../../main'

export default {
	name: 'LoginBox',
	data () {
		return {
			retailerEmail: '',
			retailerPassword: ''
		}
	},
	methods: {
		signIn () {
            
            // Sign in a user w/ email and password.
            var email = this.retailerEmail;
            var password = this.retailerPassword; 
            
            firebaseAuth.signInWithEmailAndPassword(email, password).catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // ...
            });
        
            // Push to either App or Retailer dashboard. 
            
            router.push({ path: '/' });
        }
	}
}

</script>

<style scoped>

.box {
    width: 620px;
    margin-top: 60px
}

label {
	margin-top: 20px
}

.button {
	margin-top: 60px;
	float: right;
}

</style>