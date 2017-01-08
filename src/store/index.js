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
        loading (state) {
            state.loading = true
        }
    },
    actions: {
        checkLoading (context) {
            if (!authentication.state.displayName) {
              context.commit('loading')
            }
        }
    },
    modules: {
        authentication,
        navigation
    }
})

export default store;