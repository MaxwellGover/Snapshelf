<template>
           
    <div class="box">
        <h1 class="title">Coats</h1>

        <div class="is-flex-touch">
       
        </div>
    </div>

</template>

<script>

export default {
    name: 'CoatsDisplay',
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Caveat');
@import url('https://fonts.googleapis.com/css?family=Open+Sans+Condensed:700');

.box {
    margin-top: 10px;
    box-shadow: none ;
    margin-left: 20px;
    border-radius: 0px;
    width: 100%;
}

/* Mobile styles */
@media only screen and (max-width: 980px) {

    .box {
        margin-left: 10px;
        margin-right: 10px   
    }
}
</style>