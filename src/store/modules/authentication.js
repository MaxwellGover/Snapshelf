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
        isRetailer (state, value) {
            if (value.value === true) {
                state.isRetailer = true
            } else {
                state.isRetailer = false
            }
        },
        getDisplayName (state, name) {
            state.displayName = name.name
        }
    },
    actions: {
        checkUser (context, user) {
            
            if (user.uid != null) {
            
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
            } else {
                console.log('No user currently logged in');
            }
        },
        signOut (context) {
            context.commit('notAuthed')
        }
    },
    getters: {}
};

export default authentication;