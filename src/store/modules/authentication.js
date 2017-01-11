import firebase from 'firebase'

const authentication = {
    state: {
        user: {
            isAuthed: false,
            authId: '',
            displayName: null,
            email: '',
            isRetailer: false,
            isAdmin: false
        }
    },
    mutations: {
        authUser (state, user) {
            state.user.isAuthed = true,
            state.user.authId = user.uid
        },
        notAuthed (state) {
            state.user.isAuthed = false,
            state.user.authId = '',
            state.user.isRetailer = false,
            state.user.displayName = '',
            state.user.isAdmin = false
        },
        getUser (state, userInfo) {
           state.user.displayName = userInfo.displayName,
           state.user.isRetailer = userInfo.isRetailer,
           state.user.email = userInfo.email,
           state.user.isAdmin = userInfo.isAdmin
        },
        updateDisplayName (state, userInfo) {
            state.user.displayName = userInfo.name
        }
    },
    actions: {
        checkUser (context, user) {
            if (user.uid) {
            
            context.commit('authUser', user);
            
            // Gets user data from Firebase.
            
            firebase.database()
                .ref('users')
                .child(user.uid)
                .once('value')
                .then(snapshot => {
                    const dbUser = snapshot.val()
                    context.commit('getUser', {
                        isRetailer: dbUser.isRetailer,
                        displayName: dbUser.name,
                        email: dbUser.email,
                        isAdmin: dbUser.isAdmin
                    })
                })
            }
        },
        
        signOut (context) {
            context.commit('notAuthed');
        },
    
        updateAccountDetails (context, userInfo) {
            
            let user = firebase.auth().currentUser;
            
            firebase.database().ref('/users/' + user.uid).set({
                name: userInfo.name,
                email: userInfo.email,
                isRetailer: userInfo.isRetailer,
                isAdmin: userInfo.isAdmin
            }).then(() => {
                context.commit('updateDisplayName', userInfo) 
            });
        }
    },
    getters: {}
};

export default authentication;