import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAq3cyQJfuDpVAWpmc-q9Jx-arbDfZBGzQ",
    authDomain: "fir-auth-64092.firebaseapp.com",
    projectId: "fir-auth-64092",
    storageBucket: "fir-auth-64092.appspot.com",
    messagingSenderId: "485184595393",
    appId: "1:485184595393:web:d362dd416fa4274445fb40"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}


const auth = firebase.auth();

export default auth;

