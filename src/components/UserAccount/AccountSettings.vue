<template v-if="user">

<div class="container">
    
    <p class="header">Account Details</p>
    
    <div class="box">
       
       <div v-if="isEditing === false">
         <p>Name: {{user.displayName}}</p>
         <p>Email: {{user.email}}</p><br />
         <p class="control">
            <a class="button" @click="editDetails()">
                <span class="icon">
                    <i class="fa fa-pencil fa-2x" aria-hidden="true"></i>
                </span>
                <span>Edit</span>
            </a>
       </div> 
       
        <div v-else>
            <label class="label">Name</label>
            <p class="control">
              <input class="input" type="text" v-model="newName">
            </p>
            
            <a class="save-btn button" @click="saveChanges">Save Changes</a>
            <a class="save-btn button" @click="cancelChanges">Cancel</a>
       </div>
       
    </div>
    
</div>

</template>

<script>
import { firebaseAuth, database } from '../../firebase/constants'
import store from '../../store/index'
import Vue from 'vue'
import VueFire from 'vuefire'

// explicit installation required in module environments
Vue.use(VueFire)

export default {
    name: 'AccountSettings',
    props: ['user'],
    data () {
        return {
            isEditing: false,
            oldName: this.user.displayName,
            newName: this.user.displayName,
        }
    },
    methods: {
        editDetails () {
            return this.isEditing = true
        },
        saveChanges () {
            store.dispatch('updateAccountDetails', {
                name: this.newName,
                email: this.user.email,
                isRetailer: this.user.isRetailer,
                isAdmin: this.user.isAdmin
            }).then(() => this.isEditing = false)
        },
        cancelChanges () {
            this.oldName = this.user.displayName;
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
    border-radius: 0px;
}

.save-btn {
    margin-top: 10px;
}

</style>