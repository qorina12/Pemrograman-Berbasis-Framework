import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAQbI_8sFjpZ4ZBOFraTwzAv1k-QCc0dbM",
    authDomain: "modul11-firebase-login-ec084.firebaseapp.com",
    projectId: "modul11-firebase-login-ec084",
    storageBucket: "modul11-firebase-login-ec084.appspot.com",
    messagingSenderId: "436980645701",
    appId: "1:436980645701:web:e9358bfc8897bbe683c82c",
    measurementId: "G-BNJ6WK8BJ2"
  };

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;