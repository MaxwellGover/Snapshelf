<template v-if="user">
    <div>
        <user-account-nav></user-account-nav>
        <router-view :dbUser="user"></router-view>
    </div>
</template>

<script>
import UserAccountNav from '../components/UserAccount/UserAccountNav';

export default {
    name: 'UserAccount',
    components: {
        UserAccountNav    
    },
    computed: {
        user () {
            return this.$store.state.authentication.user
        }
    }
};

</script>

<style>
    
</style>