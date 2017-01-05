<template>
	
	<div class="box">

		<p>SIGN UP</p>
		
		<label class="label">NAME</label>
        <p class="control">
          <input class="input is-medium" type="email" v-model="newUserName">
        </p>
		
		<label class="label">EMAIL</label>
        <p class="control">
          <input class="input is-medium" type="email" v-model="newUserEmail">
        </p>
        
        <label class="label">PASSWORD</label>
        <p class="control">
          <input class="input is-medium" type="password" v-model="newUserPassword">
        </p>
        
        <label class="label">CONFIRM PASSWORD</label>
        <p class="control">
          <input class="input is-medium" type="password" v-model="confirmPassword">
        </p>
        
        <a class="button is-light" @click="createNewUser()">SIGN UP</a>
	
	</div>

</template>

<script>

import { firebaseAuth } from '../../firebase/constants'
import store from '../../store/index'
import router from '../../main'

export default {
	name: 'SignUpBox',
	data () {
		return {
		    newUserName: '',
			newUserEmail: '',
			newUserPassword: '',
			confirmPassword: ''
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
            });
            
            firebaseAuth.onAuthStateChanged(user => {
            
                // Stores new user in firebase.
            
                store.dispatch('setNewUser', {
                    user,
                    name: this.newUserName,
                    email: this.newUserEmail,
                    isRetailer: false
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
    width: 540px;
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