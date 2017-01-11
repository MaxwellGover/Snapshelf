<template v-if="user">
    <div>
        <user-account-nav></user-account-nav>
        
        
        <router-view :user="user"></router-view>
    </div>
</template>

<script>
import UserAccountNav from '../components/UserAccount/UserAccountNav';
import store from '../store/index'

export default {
    name: 'UserAccount',
    components: {
        UserAccountNav    
    },
    computed: {
        user () {
            return store.state.authentication.user
        }
    }
};

</script>

<style>
    
</style>