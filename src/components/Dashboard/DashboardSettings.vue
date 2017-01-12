<template>
    
    <div class="container">
        <p class="header">Retailer Settings</p>
        
        <div class="box">
            
            <div v-if="isEditing === false">
                <p><b>Name:</b> {{user.displayName}}</p>
                <p><b>Location:</b> {{user.location}}</p>
                <p><b>Email:</b> {{user.email}}</p><br />
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
                
                <label class="label">Location</label>
                <p class="control">
                     <input class="input" type="text" v-model="newLocation">
                </p>
                
                <label class="label">Email</label>
                <p class="control">
                     <input class="input" type="email" v-model="newEmail">
                </p>
                    
                <a class="save-btn button" @click="saveChanges">Save Changes</a>
                <a class="save-btn button" @click="cancelChanges">Cancel</a>
            </div>
     
        </div>
    </div>	

</template>

<script>
import store from '../../store/index'

export default {
    name: 'DashboardSettings',
    props: {
        user: Object
    },
    data () {
        return {
            isEditing: false,
            oldName: this.user.displayName,
            newName: this.user.displayName,
            oldLocation: this.user.location,
            newLocation: this.user.location,
            oldEmail: this.user.email,
            newEmail: this.user.email
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
                isAdmin: this.user.isAdmin,
                location: this.newLocation
            }).then(() => this.isEditing = false)
        },
        cancelChanges () {
            this.oldName = this.user.displayName;
            this.newName = this.oldName;
            this.oldLocation = this.user.location;
            this.newLocation = this.oldLocation
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
	margin-top: 20px;
	margin-bottom: 0px;
}

.box {
    margin-top: 40px;
}

.header-text {
    font-family: 'Roboto', sans-serif;
    color: #8f8f8f;
    font-size: 14px;
}

.content {
    color: #8f8f8f;
}

.input {
    width: 50%;
}
  
</style>