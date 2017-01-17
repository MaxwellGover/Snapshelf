<template>

<div class="container">
    
    <p class="header">Wishlist</p>
    
    <div class="box"> 
       <p>No items in your wish list yet. Clicking the <span><i class="fa fa-star" aria-hidden="true"></i></span> icon on a product saves the item to your wishlist.</p>
    </div>
    
</div>

</template>

<script>


export default {
    name: 'UserWishlist',
  
};
    
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Amiko');
@import url('https://fonts.googleapis.com/css?family=Roboto');

.header {
    margin-top: 40px;
    font-family: 'Amiko', sans-serif;
	font-size: 28px;
	margin-bottom: 20px;
}

.box {
	box-shadow: none;
	border-radius: 0px;
}

/* Mobile styles */
@media only screen and (max-width: 980px) {
 
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