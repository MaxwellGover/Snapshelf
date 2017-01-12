<template>
	
	<div class="box">
	    
	    <p class="header">New Customer Account</p>
	    <small>Required fields *</small>
		
		<label class="label">NAME *</label>
        <p class="control">
          <input class="input is-medium" type="text" v-model="newUserName">
        </p>
		
		<label class="label">EMAIL *</label>
        <p class="control" v-if="emailValid">
          <input class="input is-medium" type="email" v-model="newUserEmail">
        </p>
        <p class="control" v-else>
          <input class="input is-medium is-danger" type="email" v-model="newUserEmail">
          <small class="help">Email is not valid.</small>
        </p>
        
        <label class="label">PASSWORD *</label>
        <p class="control" v-if="passwordsMatch">
          <input class="input is-medium" type="password" v-model="newUserPassword" v-if="passwordsMatch">
        </p>
        <p class="control" v-else>
          <input class="input is-medium is-danger" type="password" v-model="newUserPassword">
          <small class="help" v-if="newUserPassword.length <= 6">Passwords should be longer than 6 characters.</small>
          <small class="help" v-if="newUserPassword.length >= 6">Passwords don't match</small>
        </p>
        
        <label class="label">CONFIRM PASSWORD *</label>
        <p class="control" v-if="passwordsMatch">
          <input class="input is-medium" type="password" v-model="confirmPassword">
        </p>
        <p class="control" v-else>
          <input class="input is-medium is-danger" type="password" v-model="confirmPassword">
          <small class="help">Passwords don't match</small>
        </p>
        
        <a class="login-btn button is-light" @click="createNewUser()">
          <span class="icon">
            <i class="fa fa-lock fa-2x" aria-hidden="true"></i>
          </span>
          <span>LOGIN</span>
        </a>
	
	</div>

</template>

<script>

import { firebaseAuth, database } from '../../firebase/constants'
import store from '../../store/index'
import router from '../../main'

export default {
	name: 'SignUpBox',
	data () {
		return {
		  newUserName: '',
			newUserEmail: '',
			newUserPassword: '',
			confirmPassword: '',
			passwordsMatch: true,
			emailValid: true
		}
	},
	methods: {
		createNewUser () {
      
      // Create a new user with email and password.
      
      var email = this.newUserEmail;
      var password = this.newUserPassword; 
      
      firebaseAuth.createUserWithEmailAndPassword(email, password).catch((error) => {
    
          // Handle Errors here.
          
          var errorCode = error.code;
          var errorMessage = error.message;
          
          if (this.newUserPassword !== this.confirmPassword && this.newUserPassword.length < 6 && this.newUserEmail.length < 4) {
            this.passwordsMatch = false;
            this.emailValid = false;
            return router.push({ path: '/login' });
          } else if (this.newUserPassword !== this.confirmPassword || this.newUserPassword.length < 6) {
            this.passwordsMatch = false;
            return router.push({ path: '/login' });
          } else if (this.newUserEmail.length < 4) {
            this.emailValid = false;
            return router.push({ path: '/login' });
          }

          return router.push({ path: '/login' });
          // ...
      }).then(() => {
        
          var user = firebaseAuth.currentUser;
          database.ref('/users/' + user.uid).set({
            name: this.newUserName,
            email: this.newUserEmail,
            isRetailer: false,
            isAdmin: false,
            location: ''
          });
          
          user.sendEmailVerification().then(function() {
            // Email sent.
            }, function(error) {
            // An error happened.
          });
        
      });
    
      router.push({ path: '/' });
      
		  }
	 }
}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto');

.box {
    width: 540px;
}

label {
	margin-top: 20px;
	font-family: 'Roboto', sans-serif;
}

.button {
  font-family: 'Roboto', sans-serif;
	margin-top: 40px;
	float: right;
}

small {
    color: #8f8f8f;
}

.header {
  font-family: 'Roboto', sans-serif;
}

.help {
  color: red;
}

</style>