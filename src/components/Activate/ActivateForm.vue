<template>

<div class="form-container">
    
    <div class="box">
        
        <p>ACTIVATE YOUR RETAILER ACCOUNT</p>
        
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
        
        <a class="button is-light" @click="signIn()">CREATE ACCOUNT</a>
        
    </div>
    
</div>

</template>

<script>
import { firebaseAuth, database } from '../../firebase/constants'
import store from '../../store/index'
import router from '../../main'

export default {
    
    // This component allows retailers to active their Snapshelf account. 
    
    name: 'ActivateForm',
    data () {
        return {
            
            // Store user input in local data object.
            
            retailerName: '',
            retailerLocation: '',
            retailerEmail: '',
            retailerPassword: '',
            verifyPassword: '',
            activationError: false
        };
    },
    methods: {
        signIn () {
            
            // Activate a retailer w/ email and previously provided password.
            
            var email = this.retailerEmail;
            var password = this.retailerPassword; 
            
            firebaseAuth.signInWithEmailAndPassword(email, password).catch(function(error) {
                
                // Handle Errors here.
                this.activationError = true;
                window.alert('Either email or password are not valid.');
                var errorCode = error.code;
                var errorMessage = error.message;
                // ...
            }).then(() => {
              
              firebaseAuth.onAuthStateChanged(user => {
                database.ref('/users/' + user.uid).set({
                  name: this.retailerName,
                  email: email,
                  location: this.retailerLocation,
                  isRetailer: true,
                  isAdmin: false
                });
                
                store.dispatch('checkUser', user);
                
              });
            });
            // Push to retailer dashboard. 
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
    margin-top: 60px
}

.button {
    margin-top: 60px;
    float: right;
}

label {
    margin-top: 40px;
}
</style>