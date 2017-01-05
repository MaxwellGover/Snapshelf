<template>
	
	<div class="box">
		
		    <label class="label">EMAIL</label>
        <p class="control">
          <input class="input is-medium" type="email" v-model="email">
        </p>
        
        <label class="label">PASSWORD</label>
        <p class="control">
          <input class="input is-medium" type="password" v-model="password">
        </p>
        
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
			email: '',
			password: ''
		}
	},
	methods: {
		signIn () {
            
            // Sign in a user w/ email and password.
            
            var email = this.email;
            var password = this.password; 
            
            firebaseAuth.signInWithEmailAndPassword(email, password).catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // ...
            });
        
            // Push to home 
            
            router.push({ path: '/' });
        }
	}
}

</script>

<style scoped>

.box {
    width: 500px;
    height: 462px;
    margin-top: 20px;
}

label {
	margin-top: 20px
}

.button {
	margin-top: 40px;
	float: right;
}

</style>