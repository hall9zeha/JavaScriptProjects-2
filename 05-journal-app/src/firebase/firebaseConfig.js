import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'


const firebaseConfig = {
    apiKey:process.env.REACT_APP_API_KEY ,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
  };

  //Estamos usando dos configuraciones de firebase, con variables para cada variante
  //Tests y Producción en los archivos .env.test y .env.development, los cuales deberán crearse
  //cuando se descargue el proyecto por primera vez ya que no se subirán al repositorio

  firebase.initializeApp(firebaseConfig)


const db = firebase.firestore();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
   db,googleAuthProvider,firebase
   
}