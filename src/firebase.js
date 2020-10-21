import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({

        apiKey: "AIzaSyBbvRpJ8EA6uHQliJPv9hBOfaSYbSjmMeY",
        authDomain: "todo-app-cp-99fad.firebaseapp.com",
        databaseURL: "https://todo-app-cp-99fad.firebaseio.com",
        projectId: "todo-app-cp-99fad",
        storageBucket: "todo-app-cp-99fad.appspot.com",
        messagingSenderId: "574792806699",
        appId: "1:574792806699:web:8209300d5b7b5d2dd5956e",
        measurementId: "G-RYZYN5NXZG" 
});

const db = firebase.firestore();
export default db ;