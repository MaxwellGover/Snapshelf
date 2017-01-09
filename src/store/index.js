import Vue from 'vue'
import Vuex from 'vuex'
import authentication from './modules/authentication'
import navigation from './modules/navigation'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        loading: false
    },
    mutations: {
        
    },
    actions: {
    
    },
    modules: {
        authentication,
        navigation
    }
})

export default store;