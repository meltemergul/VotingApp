// Import the functions you need from the SDKs you need
import *  as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAq3cyQJfuDpVAWpmc-q9Jx-arbDfZBGzQ",
    authDomain: "fir-auth-64092.firebaseapp.com",
    projectId: "fir-auth-64092",
    storageBucket: "fir-auth-64092.appspot.com",
    messagingSenderId: "485184595393",
    appId: "1:485184595393:web:d362dd416fa4274445fb40"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
}
else {
    app = firebase.app();
}
const auth = firebase.auth();
export { auth };
