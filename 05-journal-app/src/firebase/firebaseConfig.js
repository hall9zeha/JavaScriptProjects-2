import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

// Usar su propia configuración que proporciona  firebase console una vez registrada la app.
// Esta configuración no servirá porque la base de datos a la que hace referencia
// será desabilitada por el desarrollador una vez el proyecto sea finalizado
const firebaseConfig = {
    apiKey: "AIzaSyCapoJtK87FwPs12sWKzgn0-HmWGt76bC0",
    authDomain: "journalapp-b2cf9.firebaseapp.com",
    projectId: "journalapp-b2cf9",
    storageBucket: "journalapp-b2cf9.appspot.com",
    messagingSenderId: "640786969486",
    appId: "1:640786969486:web:dd8ad2a8e936db618d6adf",
    measurementId: "G-TTE22DDRQM"
  };
///

firebase.initializeApp(firebaseConfig)
const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export{
    db,googleAuthProvider,firebase
}