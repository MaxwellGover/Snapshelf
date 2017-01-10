<template>
	
	<div class="box">
	  
	      <div class="mini-flex">
	        <p>Returning User</p>
	        <i class="thumbs-up fa fa-thumbs-up fa-2x" aria-hidden="true"></i>
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
            <i class="fa fa-lock fa-2x" aria-hidden="true"></i>
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
			password: '',
			error: false
		}
	},
	methods: {
		signIn () {
            
            // Sign in a user w/ email and password.
            
            var email = this.email;
            var password = this.password; 
            
            firebaseAuth.signInWithEmailAndPassword(email, password).catch(error => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                window.alert('User does not exist');
                // ...
            }).then (() => {
                // If user exists, push to home where checkUser will run
                if (this.error === true) {
                  router.push({ path: '/login'});
                } else if (this.error === false){
                  router.push({ path: '/' });
                }
            });
    }
	}
}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto');

.box {
    width: 540px;
    height: 502px;
}

label {
	margin-top: 20px;
	font-family: 'Roboto', sans-serif;
}

input {
  margin-bottom: 10px;
}

.login-btn {
  font-family: 'Roboto', sans-serif;
	margin-top: 190px;
	float: right;
}

.mini-flex {
  font-family: 'Roboto', sans-serif;
  display: flex;
}

.forgot-pw {
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
}

.thumbs-up {
  margin-left: 5px;
}

</style>