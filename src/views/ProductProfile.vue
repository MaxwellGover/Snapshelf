<template>
    
    <div class="product-profile container">
        
        <div class="product-info">
            
            <div class="product-image">
                <product-image></product-image>
            </div>
            
            <div class="product-details">
                <product-details></product-details>
                <retailer-card></retailer-card>
            </div>
        
        </div>
        
        <div class="recommended-products">
            
        </div>
        
    </div>
    
</template>

<script>
import ProductDetails from '../components/ProductProfile/ProductDetails'
import RetailerCard from '../components/ProductProfile/RetailerCard'
import ProductImage from '../components/ProductProfile/ProductImage'


export default {
    name: 'ProductProfile',
    components: {
        ProductDetails,
        RetailerCard,
        ProductImage
    }
};
</script>

<style scoped>

.product-profile {
    margin-top: 80px;   
}

.product-info {
    display: flex;
    justify-content: space-around;
    padding-right: 60px;
    padding-left: 60px;
 }  
 
.product-details {
    display: flex;
    flex-direction: column;
    width: 40%;
 }
 
 .product-image {
     width: 45%;
 }
 
</style>