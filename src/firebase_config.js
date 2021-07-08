import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyBTph5wlGXxrT4fjI-L-BOD78Ot613asQE",
    authDomain: "todoapp-47fae.firebaseapp.com",
    projectId: "todoapp-47fae",
    storageBucket: "todoapp-47fae.appspot.com",
    messagingSenderId: "457946906900",
    appId: "1:457946906900:web:8554f6d0222e38875f4201"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };