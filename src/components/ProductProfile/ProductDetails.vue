<template>
    
    <div class="product-details box">
    
        <div>
            <p class="brand-name"><b>Brand Name</b></p>
            <p class="product-name">Product Name</p><br />
            <p class="price">$100</p><br />
            <p class="product-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Pellentesque risus mi, tempus quis placerat ut, porta nec nulla. 
                Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum felis venenatis efficitur. 
                Aenean ac eleifend lacus, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. 
                Donec dui urna, vehicula et sem eget, facilisis sodales sem.
            </p><br />
            <ul>
                <li>Feature 1</li> 
                <li>Feature 1</li> 
                <li>Feature 1</li> 
            </ul>
            
            <div class="cta-block">
                <a class="button is-large">CALL TO ACTION</a>
            </div>
            
        </div>   
        
        
    </div>
    
</template>

<script>

export default {
    name: 'ProductDetails'
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto');

.product-details {
    
}

.box {
    font-family: 'Roboto', sans-serif;
    box-shadow: none;
    border-radius: 0px;
    width: 100%;
}

.brand-name {
    font-size: 20px;
    margin-bottom: 0px;
}

.product-name {
    font-size: 18px;
}

.price {
    font-size: 16px;
}

.product-desc {
    font-size: 14px;
}

.cta-block {
   margin-top: 40px;
}

.button {
    width: 100%;
}

</style>