import Vue from 'vue'
import Vuex from 'vuex'
import { database } from '../firebase/constants'
import authentication from './modules/authentication'
import firebase from 'firebase'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        authentication
    }
})

export default store;