const navigation = {
    state: {
        show: true
    },
    mutations: {
        hideNav (state) {
            state.show = false
        },
        showNav(state) {
            state.show = true
        }
    },
    actions: {
        toggleNav(context, route) {
            if (route !== "/dashboard/products") {
                context.commit('showNav')
            } else if (route !== "/dashboard/settings") {
                context.commit('showNav')
            } else {
                context.commit('hideNav')
            }
        }
    }
};

export default navigation;