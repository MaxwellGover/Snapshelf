import Vue from 'vue'
import Vuex from 'vuex'
import authentication from './modules/authentication'
import navigator from './modules/navigator'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        authentication,
        navigator
    }
})

export default store;