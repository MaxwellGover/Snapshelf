<template>

<div class="form-container">
    
    <div class="box">
        
        <p>ACTIVATE YOUR ACCOUNT</p>
        
        <label class="label">RETAILER NAME</label>
        <p class="control">
          <input class="input is-medium" type="text" v-model="retailerName">
        </p>
        
        <label class="label">RETAILER LOCATION</label>
        <p class="control">
          <input class="input is-medium" type="text" v-model="retailerLocation">
        </p>
        <small>Example: Lansing, MI</small>
        
        <label class="label">RETAILER EMAIL</label>
        <p class="control">
          <input class="input is-medium" type="email" v-model="retailerEmail">
        </p>
        <small>This should be the email you provided Snapshelf when you applied.</small>
        
        <label class="label">RETAILER PASSWORD</label>
        <p class="control">
          <input class="input is-medium" type="password" v-model="retailerPassword">
        </p>
        <small>This should be the password that was provided to you in your confirmation email.</small>
        
        <a class="button is-light" @click="onAccountCreate()">CREATE ACCOUNT</a>
        
    </div>
    
</div>

</template>

<script>
import { firebaseAuth, database } from '../../firebase/constants'
import store from '../../store/index'
import router from '../../main'

export default {
    
    // Allows Snapshelf to create accounts for verified retailers.
    
    name: 'ActivateForm',
    data () {
        return {
            
            // Store user input in local data object.
            
            retailerName: '',
            retailerLocation: '',
            retailerEmail: '',
            retailerPassword: '',
            verifyPassword: ''
        };
    },
    methods: {
        onAccountCreate () {
            
            // Sign in a user w/ email and password.
            var email = this.retailerEmail;
            var password = this.retailerPassword; 
            
            firebaseAuth.signInWithEmailAndPassword(email, password).catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // ...
            });
            
            // Checks for a user and dispatches an action. 
    
            firebaseAuth.onAuthStateChanged(user => {
              store.dispatch('checkUser', user);
              
              store.dispatch('setUser', {
                  user,
                  name: this.retailerName,
                  email: this.retailerEmail,
                  retailerLocation: this.retailerLocation
              });
            
                
            });
            
            // Push to either App or Retailer dashboard. 
            
            router.push({ path: '/' });
        }
    }
};
    
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Muli');

.form-container {
    font-family: 'Muli', sans-serif;
    display: flex;
    justify-content: center;
    align-content: center;
}

.box {
    width: 620px;
}

.button {
    margin-top: 40px;
    float: right;
}

label {
    margin-top: 40px;
}
</style>