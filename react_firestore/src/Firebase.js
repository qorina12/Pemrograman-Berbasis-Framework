import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const settings = {timestampsInSnapshots: true};

const firebaseConfig = {
    apiKey: "AIzaSyB8fVodlgB5YR4PRzwtqkl8HAUoMA1qc68",
    authDomain: "qorina-reactfirestore-e4e18.firebaseapp.com",
    databaseURL: "https://qorina-reactfirestore-e4e18-default-rtdb.firebaseio.com",
    projectId: "qorina-reactfirestore-e4e18",
    storageBucket: "qorina-reactfirestore-e4e18.appspot.com",
    messagingSenderId: "1065313731957",
    appId: "1:1065313731957:web:4f8bfda48a7ee7b1b3bf3c",
    measurementId: "G-EKYM9FCRDV"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings(settings);

  export default firebase;