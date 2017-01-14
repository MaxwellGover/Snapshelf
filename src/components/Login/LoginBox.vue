<template>
  	
  	<div class="box container">
  	  
  	      <p class="header">Sign in to your account.</p>
  		
  		    <label class="label">EMAIL *</label>
          <p class="control">
            <input class="input" type="email" v-model="email">
          </p>
          
          <label class="label">PASSWORD *</label>
          <p class="control">
            <input class="input" type="password" v-model="password">
            <small class="forgot-pw">Forgot Password?</small>
          </p>
          
          <a class="login-btn button is-light is-pulled-right" @click="signIn()">
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
import router from '../../router/index'

export default {
	name: 'LoginBox',
	data () {
		return {
			email: '',
			password: '',
			invalidUser: false
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
                this.invalidUser = true;
                window.alert("Could not find a user with those credentials.");
                return; 
                // ...
            }).then (() => {
                if (this.invalidUser === false) {
                  router.push({ path: '/' });
                } else {
                  router.push({ path: '/login'})
                }
            });
    }
	}
}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Caveat');
@import url('https://fonts.googleapis.com/css?family=Roboto');

.box {
    display: flex;
    flex-direction: column;
    width: 540px;
    margin-top: 50px;
    box-shadow: none;
    border-radius: 0px;
}

label {
	margin-top: 20px;
	font-family: 'Roboto', sans-serif;
}

.login-btn {
  font-family: 'Roboto', sans-serif;
  align-self: flex-end;
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

.header {
  font-family: 'Caveat', cursive;
  text-align: center;
  font-size: 28px;
  margin-top: 5px;
  margin-bottom: 5px;
}

/* Mobile styles */
@media only screen and (max-width: 980px) {
  .box {
    width: 100%;
    margin-right: 10px;
    margin-top: -20px;
    box-shadow: none;
    border-radius: 0px;
  }
}
</style>