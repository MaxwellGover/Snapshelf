<template>
    <div>
        <user-account-nav></user-account-nav>
        
        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import UserAccountNav from '../components/UserAccount/UserAccountNav';

export default {
    name: 'UserAccount',
    components: {
        UserAccountNav    
    }  
};

</script>

<style>
    
</style>