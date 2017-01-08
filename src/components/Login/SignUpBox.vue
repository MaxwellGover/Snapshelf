<template>
	
	<div class="box">
	    
	    <p>New Customer Account</p>
	    <small>Required fields *</small>
		
		<label class="label">NAME *</label>
        <p class="control">
          <input class="input is-medium" type="text" v-model="newUserName">
        </p>
		
		<label class="label">EMAIL *</label>
        <p class="control">
          <input class="input is-medium" type="email" v-model="newUserEmail">
        </p>
        
        <label class="label">PASSWORD *</label>
        <p class="control">
          <input class="input is-medium" type="password" v-model="newUserPassword">
        </p>
        
        <label class="label">CONFIRM PASSWORD *</label>
        <p class="control">
          <input class="input is-medium" type="password" v-model="confirmPassword">
        </p>
        
        <a class="login-btn button is-light" @click="createNewUser()">
          <span class="icon">
            <div data-icon="ei-lock" data-size="s"></div>
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
		}
	},
	methods: {
		createNewUser () {
            
            // Create a new user with email and password.
            
            var email = this.newUserEmail;
            var password = this.newUserPassword; 
            
            firebaseAuth.createUserWithEmailAndPassword(email, password).catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // ...
            }).then(() => {
              
              firebaseAuth.onAuthStateChanged(user => {
                database.ref('/users/' + user.uid).set({
                  name: this.newUserName,
                  email: this.newUserEmail,
                  isRetailer: false,
                  isAdmin: false
                });
              });  
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
}

label {
	margin-top: 20px
}

.button {
	margin-top: 40px;
	float: right;
}

small {
    color: #8f8f8f;
}

</style>