<template>

<div>
    
    <p class="header">Account Details</p>
    
    <div class="box container">
       
       <div>
         <p>Name: {{user.displayName}}</p>
         <p>Email: {{user.email}}</p><br />
         <p class="control">
            <a class="button">
                <span class="icon">
                    <i class="fa fa-pencil fa-2x" aria-hidden="true"></i>
                </span>
                <span>Edit</span>
            </a>
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
    computed: {
        user () {
            return store.state.authentication
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
</style>