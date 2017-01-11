<template>

    <article class="retailer-card message">
        <div class="message-header">
            <p>About this retailer</p>   
        </div>
        <div class="message-body">
            <p class="retailer-name"><b>Kositchek's</b></p>
            <p class="retailer-location">Lansing, MI</p><br />
            <p class="retailer-desc">
                Kositchek's Menswear was started in 1865 by Henry Kositchek in Eaton Rapids Michigan. 
                It moved to its present location in downtown Lansing in the late 1800's. 
                Kositchek's has been in business for one hundred fifty years and is in the hands of the fourth generation.
            </p><br />
            <span><a>http://kositcheks.com/html/welcome_to_kositcheks.html</a></span>
        </div>
    </article>

 
</template>

<script>
   
export default {
    name: 'RetailerCard'
}   
 
</script>

<style scoped>
  
.retailer-card {
    margin-top: 10px;
}

.retailer-name {
    font-size: 16px;
}

.message-body {
    background-color: #eff8f3;
}

  
</style>