<template>
    
    <div class="card">
        <div class="card-image">
            <figure class="image is-3by4">
                <img src="http://bulma.io/images/placeholders/1280x960.png" alt="Image">
            </figure>
        </div>
        
        <div class="card-content">
            <p class="brand-name"><b>Blue Blue Japan Indigo Flannel</b></p>
            <p class="product-name">Cutover Shirt Blue</p><br />
            
            <div class="item-footer">
                <p class="price">$100</p>
                <i class="fa fa-heart-o fa-3x" aria-hidden="true"></i>
            </div>
        </div>
        
    </div>
  
</template>

<script>

export default {
    name: 'ProductItem'
};

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Caveat');
@import url('https://fonts.googleapis.com/css?family=Roboto');

.brand-name {
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
}

.card {
    width: 250px;
}

img {
    height: 350px;
    cursor: pointer;
}

.item-footer {
    display: flex;
    justify-content: space-between;
}

.product-name {
    color: #8f8f8f;
}

.fa {
    cursor: pointer;
}

</style>