<template>

<div class="form-container container">
    
    <p class="header">Register a retailer account.</p>
    
    <div class="box">
        
        <label class="label">RETAILER NAME</label>
        <p class="control">
          <input class="input" type="text" v-model="retailerName">
        </p>
        
        <label class="label">RETAILER LOCATION</label>
        <p class="control">
          <input class="input" type="text" v-model="retailerLocation">
        </p>
        <small>Example: Lansing, MI</small>
        
        <label class="label">RETAILER EMAIL</label>
        <p class="control">
          <input class="input" type="email" v-model="retailerEmail">
        </p>
        <small>This should be the email you provided Snapshelf when you applied.</small>
        
        <label class="label">RETAILER PASSWORD</label>
        <p class="control">
          <input class="input" type="password" v-model="retailerPassword">
        </p>
        <small>This should be the password that was provided to you in your confirmation email.</small>
        
        <label class="label">CONFIRM PASSWORD</label>
        <p class="control">
          <input class="input" type="password" v-model="confirmPassword">
        </p>
        
        <a class="button is-light" @click="activate()">
            <span class="icon">
          	    <i class="fa fa-check fa-2x" aria-hidden="true"></i>
        	</span>
        	<span>Create Account</span>
        </a>
        
    </div>
    
</div>

</template>

<script>
import { firebaseAuth, database } from '../../firebase/constants'
import store from '../../store/index'
import router from '../../router/index'

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
            confirmPassword: '',
            activationError: false
        };
    },
    methods: {
        activate () {
            
            // Activate a retailer w/ email and previously provided password.
            
            var email = this.retailerEmail;
            var password = this.retailerPassword; 
            
            firebaseAuth.signInWithEmailAndPassword(email, password).catch((error) => {
                
                this.activationError = true;
                window.alert("There was an error activating this account. Make sure passwords match and that the retailer has first been added manually in Firebase.")
                var errorCode = error.code;
                var errorMessage = error.message;
                // ...
            }).then(() => {
              
                var user = firebaseAuth.currentUser;
                database.ref('/users/' + user.uid).set({
                  name: this.retailerName,
                  email: this.retailerEmail,
                  location: this.retailerLocation,
                  isRetailer: true,
                  isAdmin: false
                });
                this.determineRoute();
            });
        },
        determineRoute() {
            if (this.activationError === true) {
                router.push({ path: '/activate'})
            } else {
                router.push({ path: '/'})
            }
        }
    }
};
    
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Caveat');
@import url('https://fonts.googleapis.com/css?family=Roboto');

.form-container {
    font-family: 'Roboto', sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
}

.box {
    width: 620px;
    margin-top: 40px;
    box-shadow: none;
    border-radius: 0px;
}

.button {
    margin-top: 60px;
    float: right;
}

label {
    margin-top: 40px;
}

.header {
    margin-top: 40px;
    font-family: 'Caveat', cursive;
	font-size: 28px;
}
</style>