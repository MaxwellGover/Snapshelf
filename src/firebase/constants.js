import firebase from 'firebase';

firebase.initializeApp({
    apiKey: "AIzaSyB_0ACMtFqbUI3XRZI4qUcqoZtYHBmCPhQ",
    authDomain: "snapshelf-aa1b5.firebaseapp.com",
    databaseURL: "https://snapshelf-aa1b5.firebaseio.com",
    storageBucket: "snapshelf-aa1b5.appspot.com",
    messagingSenderId: "1019768823146"
});

const database = firebase.database();
const firebaseAuth = firebase.auth();

export {
    database,
    firebaseAuth
}
