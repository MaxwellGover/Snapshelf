const authentication = {
    state: {
        isAuthed: false,
        authId: ''
    },
    mutations: {
        authUser (state, user) {
            state.isAuthed = true;
            state.authId = user.uid 
        },
        notAuthed (state) {
            state.isAuthed = false;
            state.authId = ''
        }
    },
    actions: {
        checkUser (context, user) {
            
            if (!user.uid) {

                // Do nothing.

            } else {
                
            context.commit('authUser', user);

            }
        },
        signOut (context) {
            context.commit('notAuthed')
        },
        setUser (context, payload) {
            
            // Set retailer info in Firebase.
            
            var uid = payload.user.uid;
            database.ref('/users/' + uid).set({
                name: payload.name,
                email: payload.email,
                location: payload.retailerLocation,
                isRetailer: true
            })   
        
        }
    },
    getters: {}
};

export default authentication;