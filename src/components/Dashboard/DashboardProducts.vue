<template>
    
    <div class="container">
        <p class="header">Products</p>
        <p class="header-text">These product images have been successfully edited and are ready to post to Snapshelf!</p>
        
        <div class="box">
            
            <div class="content">
                <p>No new products available to post...yet
                <span><i class="fa fa-smile-o fa-2x" aria-hidden="true"></i></span><br />
                </p>
                <p>Use the Snapshelf app to take and submit product images for editing.</p>
                <p><b>NOTE:</b> Turnaround times for images to be edited and returned can be up to 24 hrs.</p>
            </div>
     
        </div>
    </div>	
</template>

<script>

export default {
    name: 'DashboardProducts',
};

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Amiko');
@import url('https://fonts.googleapis.com/css?family=Roboto');

.header {
    font-family: 'Amiko', sans-serif;
	font-size: 28px;
	margin-top: 20px;
	margin-bottom: 0px;
}

.box {
    margin-top: 40px;
    box-shadow: none;
    border-radius: 0px;
}

.header-text {
    font-family: 'Roboto', sans-serif;
    color: #8f8f8f;
    font-size: 14px;
}

.content {
    color: #8f8f8f;
}
</style>