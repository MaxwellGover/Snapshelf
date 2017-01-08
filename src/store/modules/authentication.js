import firebase from 'firebase'

const authentication = {
    state: {
        isAuthed: false,
        authId: '',
        displayName: '',
        isRetailer: false,
        isAdmin: false
    },
    mutations: {
        authUser (state, user) {
            state.isAuthed = true;
            state.authId = user.uid;
        },
        notAuthed (state) {
            state.isAuthed = false;
            state.authId = '';
            state.isRetailer = false,
            state.displayName = ''
        },
        isRetailer (state) {
            state.isRetailer = true
        },
        isNotRetailer (state) {
            state.isRetailer = false
        },
        getDisplayName (state, displayName) {
            state.displayName = displayName   
        }
    },
    actions: {
        checkUser (context, user) {
            
            var retailerRef = 
                firebase.database()
                .ref('/users/' + user.uid + '/isRetailer/')
                .once('value').then(snapshot => snapshot.val());
                
            // Gets name of the current user from Firebase and will eventually store that in Vuex state.
            
            /* var displayName =
                firebase.database()
                .ref('/users/' + user.uid)
                .once('value').then(snapshot => snapshot.val().name); */
    
            if (!user.uid) {

                // Do nothing.

            } else if (retailerRef === true) {

                context.commit('authUser', user);
                
                context.commit('isRetailer');

            } else {
                
                context.commit('authUser', user);
                
                context.commit('isNotRetailer');
            };
        },
        signOut (context) {
            context.commit('notAuthed')
        },
        setRetailer (context, payload) {
            
            // Set retailer info in Firebase.
            
            var uid = payload.user.uid;
            firebase.database().ref('/users/' + uid).set({
                name: payload.name,
                email: payload.email,
                location: payload.retailerLocation,
                isRetailer: payload.isRetailer,
                isAdmin: payload.isAdmin
            });  
        
        },
        setNewUser (context, payload) {
            
            // Sets a user in firebase w/ a isRetailer value of false.
            var user = payload.user;
            
            firebase.database().ref('/users/' + user.uid).set({
                name: payload.userName,
                email: payload.email,
                isRetailer: payload.isRetailer,
                isAdmin: payload.isAdmin
            });
        }
    },
    getters: {}
};

export default authentication;