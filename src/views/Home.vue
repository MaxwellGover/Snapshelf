<template>
    
    <div>
        
        <div class="banner">
          <div class="content container">
            <h1 class="banner-title"><b>Men's Outerwear</b></h1>
            <p class="banner-text">Snapshelf is a site dedicated to curating high quality outerwear from great menswear retailers.
            </p>
          </div>  
        </div>
    
        <div class="home-view container">
            <aside class="menu">
               
               <p class="menu-label">
                Filter
              </p>
              <ul class="menu-list">
                  <li><a>New In</a></li>
              </ul>
              <p class="menu-label">
                Category
              </p>
              <ul class="menu-list">
                <li @click="toggleCoats()">
                    <a>Coats</a>
                    <ul v-show="coatsDropdown">
                        <li><a>Double Breasted & Peacoats</a></li>
                        <li><a>Down Coats</a></li>
                        <li><a>Hooded Coats</a></li>
                        <li><a>Leather Coats</a></li>
                        <li><a>Single Breasted Coats</a></li>
                        <li><a>Trench Coats</a></li>
                    </ul>
                </li>
                <li @click="toggleJackets()">
                    <a>Jackets</a>
                    <ul v-show="jacketsDropdown">
                        <li><a>Biker Jackets</a></li>
                        <li><a>Blazers</a></li>
                        <li><a>Bomber Jackets</a></li>
                        <li><a>Denim Jackets</a></li>
                        <li><a>Down Jackets</a></li>
                        <li><a>Hooded Jackets</a></li>
                        <li><a>Leather Jackets</a></li>
                        <li><a>Lightweight Jackets</a></li>
                        <li><a>Sports Jackets & Wind Breakers</a></li>
                        <li><a>Suit & Dinner Jackets</a></li>
                        <li><a>Waistcoats</a></li>
                    </ul>
                </li>
              </ul>
    
            </aside>
            
            <!-- Move this to it's own component -->
            <div class="box">
                <h1 class="new-items-title">New Items</h1>
                <product-item></product-item>
            </div>
        
        </div>
    
    </div>

</template>

<script>
import ProductItem from '../components/ProductItem'

export default {
    name: 'Home',
    components: {
        ProductItem
    },
    data () {
        return {
            coatsDropdown: false,
            jacketsDropdown: false
        }
    },
    methods: {
        toggleCoats () {
            return this.coatsDropdown = !this.coatsDropdown;
        },
        toggleJackets () {
            return this.jacketsDropdown = !this.jacketsDropdown;
        }
    }
};

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Caveat');
@import url('https://fonts.googleapis.com/css?family=Open+Sans+Condensed:700');

.home-view {
    display: flex;
}

.menu {
    margin-top: 10px;
    background-color: #fff;
    width: 30%;
    padding: 10px;
}

.box {
    margin-top: 10px;
    box-shadow: none ;
    margin-left: 20px;
    border-radius: 0px;
    width: 100%;
}

.banner {
    padding: 15px;
    background-color: #eff8f3;
}

.banner-title {
    font-family: 'Open Sans Condensed', sans-serif;
    font-size: 40px;
    margin-bottom: 5px;
}

.banner-text {
    
}

.new-items-title {
    font-family: 'Caveat', cursive;
	font-size: 32px; 
	margin-bottom: 40px;
}
</style>