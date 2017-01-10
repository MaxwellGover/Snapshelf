<template>
    <div>
        <p class="header">Products</p>
        
        <div class="notification">
            These product images have been successfully edited and are ready to post to Snapshelf!
        </div>
        
        <div class="box container">
            No new products available to post. Check back later.
        </div>
    </div>	
</template>

<script>

export default {
    name: 'DashboardProducts'
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

.box {

    
}

.notification {
    font-family: 'Roboto', sans-serif;
    color: #8f8f8f;
    margin-bottom: 60px;
    background-color: #fff;
    width: 25%;
}
</style>