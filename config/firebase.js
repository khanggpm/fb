import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyAfP1GjVMzTZB2ho6IBivAkkr4gTZoez38",
    authDomain: "posts-7835c.firebaseapp.com",
    databaseURL: "https://posts-7835c.firebaseio.com",
    projectId: "posts-7835c",
    storageBucket: "posts-7835c.appspot.com",
    messagingSenderId: "441814660462",
    appId: "1:441814660462:web:72a3a64f64aa6467153d7f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export  default firebase;
