import firebase from "firebase/app";
// after other imports
import "firebase/firestore";


const settings = {timestampsInSnapshots: true};

const config = {
    apiKey: "AIzaSyBipYtnYP7-KV7DsDJw1fktNbWlUJWYgLg",
    authDomain: "aerosimple-246605.firebaseapp.com",
    databaseURL: "https://aerosimple-246605.firebaseio.com",
    projectId: "aerosimple-246605",
    storageBucket: "aerosimple-246605.appspot.com",
    messagingSenderId: "227510545239",
    appId: "1:227510545239:web:7fa82dc9f4d543c9"
}

firebase.initializeApp(config);

export const db = firebase.firestore();
