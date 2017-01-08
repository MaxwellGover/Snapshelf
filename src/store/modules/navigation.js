const navigation = {
    state: {
        showNav: true
    },
    mutations: {
        hideNav (state) {
            state.showNav = false
        },
        showNav(state) {
            state.showNav = true
        }
    }
};

export default navigation;