import Vue from 'vue'
import Vuex from 'vuex'
import database from '../firebase/constants'
import firebase from 'firebase'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        isAuthed: false
    },
    mutations: {
        authUser (state) {
            state.isAuthed = true
        }
    },
    actions: {
        checkUser (context, payload) {
            if (!payload.user) {
                context.state.isAuthed = false;
            } else {
                
                const uid = payload.user.uid;
                
                database.ref('users/' + uid).set({
                    name: payload.name,
                    email: payload.email,
                    location: payload.retailerLocation
                });
                
                context.commit('authUser');
            }
        }
    },
    getters: {}
})

export default store;