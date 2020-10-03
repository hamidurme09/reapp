import firebase from 'firebase';

// Initialize Firebase
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDZU3fftyz5pBNVN5w8EMUG19Q9p9sEOy0",
    authDomain: "gut-block-mhr.firebaseapp.com",
    databaseURL: "https://gut-block-mhr.firebaseio.com",
    projectId: "gut-block-mhr",
    storageBucket: "gut-block-mhr.appspot.com",
    messagingSenderId: "1065495319233",
    appId: "1:1065495319233:web:a798540cd717407dabfa40",
    measurementId: "G-4KBGELENQP",
  });

const db = firebaseApp.firestore();

export default db;
