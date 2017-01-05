<template>
	
	<div class="box">
	  
	      <div class="mini-flex">
	        <p>Returning User</p>
	        <div class="icon" data-icon="ei-like" data-size="s"></div>
	      </div>
		
		    <label class="label">EMAIL *</label>
        <p class="control">
          <input class="input is-medium" type="email" v-model="email">
        </p>
        
        <label class="label">PASSWORD *</label>
        <p class="control">
          <input class="input is-medium" type="password" v-model="password">
          <small class="forgot-pw">Forgot Password?</small>
        </p>
        
        <a class="login-btn button is-light" @click="signIn()">
          <span class="icon">
            <div data-icon="ei-lock" data-size="s"></div>
          </span>
          <span>LOGIN</span>
        </a>
	
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
    height: 502px;
}

label {
	margin-top: 20px
}

input {
  margin-bottom: 10px;
}

.login-btn {
	margin-top: 190px;
	float: right;
}

.mini-flex {
  display: flex;
}

.forgot-pw {
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
}

</style>