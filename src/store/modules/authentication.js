import firebase from 'firebase'

const authentication = {
    state: {
        isAuthed: false,
        authId: '',
        displayName: '',
        email: '',
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
            state.displayName = '',
            state.isAdmin = false
        },
        isRetailer (state, value) {
            if (value.value === true) {
                state.isRetailer = true
            } else {
                state.isRetailer = false
            }
        },
        getDisplayName (state, name) {
            state.displayName = name.name
        },
        getEmail (state, email) {
            state.email = email.email 
        }
    },
    
    actions: {
        checkUser (context, user) {
            
            if (user.uid) {
            
            context.commit('authUser', user);
            
            // checkUser runs once when the app is initialized. 
            
            // Gets value of the user's isRetailer property from firebase. 
            
            firebase.database()
                .ref('/users/' + user.uid + '/isRetailer/')
                .once('value').then(snapshot => context.commit('isRetailer', {
                    value: snapshot.val()
                }));
        
            // Gets name of the current user from Firebase and will eventually store that in Vuex state.
            
            firebase.database()
                .ref('/users/' + user.uid + '/name/')
                .once('value').then(snapshot => context.commit('getDisplayName', {
                    name: snapshot.val()
                }));
                
            firebase.database()
                .ref('/users/' + user.uid + '/email/')
                .once('value').then(snapshot => context.commit('getEmail', {
                    email: snapshot.val()
                }));
            }
        },
        
        signOut (context) {
            context.commit('notAuthed');
        }
    
        
    },
    getters: {}
};

export default authentication;