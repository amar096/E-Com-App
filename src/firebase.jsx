import firebase from "firebase"

const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyCurdT12S5BrBrFc-Uyu1HPM1wnK9nXDfQ",
    authDomain: "e-commerceapp-23b5b.firebaseapp.com",
    databaseURL: "https://e-commerceapp-23b5b.firebaseio.com",
    projectId: "e-commerceapp-23b5b",
    storageBucket: "e-commerceapp-23b5b.appspot.com",
    messagingSenderId: "1050742216049",
    appId: "1:1050742216049:web:fc4d01c2ac376bb6a192d0",
    measurementId: "G-XG6270N1DG"      
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };