<template>
    
    <div>

        <div class="tabs is-touch is-hidden-desktop">
            <ul>
                <li @click="backToHome"><a>New</a></li>
                <li @click="toggleCoats"><a>Coats</a></li>
                <li @click="toggleJackets"><a>Jackets</a></li>
            </ul>
        </div>
        
        <div class="banner">
          <div class="content container">
            <h1 class="banner-title"><b>Men's Outerwear</b></h1>
            <p class="banner-text">Snapshelf is a site dedicated to curating high quality outerwear from great menswear retailers.
            </p>
          </div>  
        </div>
    
        <div class="home-view container">
            <aside class="menu is-hidden-touch">
               
               <p class="menu-label">
                Filter
              </p>
              <ul class="menu-list">
                  <li @click="backToHome"><a>New In</a></li>
              </ul>
              <p class="menu-label">
                Category
              </p>
              <ul class="menu-list">
                <li @click="toggleCoats">
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
                <li @click="toggleJackets">
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
            
            <router-view></router-view>
        
        </div>
    
    </div>

</template>

<script>
import router from '../router/index'

export default {
    name: 'Home',
    components: {
       
    },
    data () {
        return {
            coatsDropdown: false,
            jacketsDropdown: false
        }
    },
    methods: {
        toggleCoats () {
            router.push({ path: '/coats'});
            return this.coatsDropdown = !this.coatsDropdown;
        },
        toggleJackets () {
            router.push({ path: '/jackets'});
            return this.jacketsDropdown = !this.jacketsDropdown;
        },
        backToHome () {
           this.coatsDropdown = false;
           this.jacketsDropdown = false;
           return router.push({ path: '/'});
        }
    }
};

</script>

<style scoped>
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
    background-color: #cecece;
}

.banner-title {
    font-family: 'Open Sans Condensed', sans-serif;
    font-size: 40px;
    margin-bottom: 5px;
}

.banner-text {
    
}

a:hover {
    color: #000;
}

/* Mobile styles */
@media only screen and (max-width: 980px) {
    .tabs {
        background-color: #fff
    }
    .banner {
        margin-top: -20px
    }
}
</style>