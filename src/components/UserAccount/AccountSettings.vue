<template v-if="dbUser">

<div class="container">
    
    <p class="header">Account Details</p>
    
    <div class="box">
       
       <div v-if="isEditing === false">
            <p><b>Name:</b> {{dbUser.displayName}}</p>
            <p><b>Email:</b> {{dbUser.email}}</p><br />
            <p class="control">
                <a class="button" @click="editDetails()">
                    <span class="icon">
                        <i class="fa fa-pencil fa-2x" aria-hidden="true"></i>
                    </span>
                    <span>Edit</span>
                </a>
            </p>
       </div> 
       
        <div v-else>
            <label class="label">Name</label>
            <p class="control">
              <input class="input" type="text" v-model="newName">
            </p>
            
            <label class="label">Email</label>
            <p class="control">
              <input class="input" type="text" v-model="newEmail">
            </p>
            
            <a class="save-btn button" @click="saveChanges">Save Changes</a>
            <a class="save-btn button" @click="cancelChanges">Cancel</a>
       </div>
       
    </div>
    
</div>

</template>

<script>

// TODO: Error code not running when email already exists. 

import firebase from 'firebase'
import store from '../../store/index'
import Vue from 'vue'
import VueFire from 'vuefire'

Vue.use(VueFire)

export default {
    name: 'AccountSettings',
    props: {
        dbUser: Object
    },
    data () {
        return {
            isEditing: false,
            oldName: this.dbUser.displayName,
            newName: this.dbUser.displayName,
            oldEmail: this.dbUser.email,
            newEmail: this.dbUser.email
        }
    },
    methods: {
        editDetails () {
            return this.isEditing = true
        },
        saveChanges () {
            
            if (this.newEmail === this.oldEmail) {
                // Do nothing
            } else {
                const user = firebase.auth().currentUser;
                user.updateEmail(this.newEmail).then(() => {
                    // Update successful.
                    window.alert("Your email his been successfully updated to " + this.newEmail)
                }, (error) => {
                    // An error happened.
                    window.alert("This email already exists");
                    return this.newEmail = this.oldEmail;
                });
            
            }
            
            if (this.newName !== this.oldName) {
                window.alert("Your name has been changed to " + this.newName)
            }
            
            store.dispatch('updateAccountDetails', {
                name: this.newName,
                email: this.newEmail,
                isRetailer: this.dbUser.isRetailer,
                isAdmin: this.dbUser.isAdmin,
                location: this.dbUser.location
            }).then(() => this.isEditing = false)
        },
        cancelChanges () {
            this.oldName = this.dbUser.displayName;
            this.newName = this.oldName;
            return this.isEditing = false
        }
    }
};
    
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Caveat');
@import url('https://fonts.googleapis.com/css?family=Roboto');

.header { 
    font-family: 'Caveat', cursive;
	font-size: 28px;
	margin-top: 40px;
	margin-bottom: 20px;
}

.control {
    width: 40%;
}

.box {
    box-shadow: none;
    border-radius: 0px
}

.save-btn {
    margin-top: 10px;
}

/* Mobile styles */
@media only screen and (max-width: 980px) {
    .control {
        width: 100%;
    }

    .box {
        margin-left: 10px;
        margin-right: 10px   
    }

    .header {
        margin-top: 20px;
        margin-left: 10px;
    }
}

</style>