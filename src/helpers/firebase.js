
// after other imports
import * as firebase from 'firebase'


const settings = {timestampsInSnapshots: true};

// const config = {
//     apiKey: "AIzaSyBipYtnYP7-KV7DsDJw1fktNbWlUJWYgLg",
//     authDomain: "aerosimple-246605.firebaseapp.com",
//     databaseURL: "https://aerosimple-246605.firebaseio.com",
//     projectId: "aerosimple-246605",
//     storageBucket: "aerosimple-246605.appspot.com",
//     messagingSenderId: "227510545239",
//     appId: "1:227510545239:web:7fa82dc9f4d543c9"
// }
const config={
    apiKey: "AIzaSyBQUqbXRnKSdR6Tbp5eWSmrrw-k-IRHaqE",
        authDomain: "fir-8dae4.firebaseapp.com",
    databaseURL: "https://fir-8dae4.firebaseio.com",
    projectId: "fir-8dae4",
    storageBucket: "fir-8dae4.appspot.com",
    messagingSenderId: "895354415465",
    appId: "1:895354415465:web:757d30c87c939d1d"
}

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

export const registerUser=function(email,password,callback){
    firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((user) => {
            callback(user,true)
        })
        .catch((error) => {
            callback(error,false)
        });
}

export const loginUser=function (email,password,callback) {
    firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((user) => {
            callback(user,true)
        })
        .catch((error) => {
            callback(error,false)
        });
}

export const userAuth=function (callback) {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            user.updateProfile({
                displayName: "Jane Q. User",
                photoURL: "https://example.com/jane-q-user/profile.jpg",
                customVar:'hai'
            }).then(function() {
                // Profile updated successfully!
                // "Jane Q. User"
                var displayName = user.displayName;
                // "https://example.com/jane-q-user/profile.jpg"
                var photoURL = user.photoURL;
            }, function(error) {
                // An error happened.
            });
            callback(user)
        } else {
            callback(0)
        }
    });
}

export const updateUserPhoto=function(photo,callback){
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            user.updateProfile({
                photoURL: photo
            }).then(function() {
                callback({},true)
            }, function(error) {
                callback(error,false)
            });

        } else {
            callback(0)
        }
    });
}

export const db = firebase.firestore();
