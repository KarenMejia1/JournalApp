import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA7W7--cS-ryJrY9W9t1vf9q7aknBnrtys",
    authDomain: "react-app-cursos-efddf.firebaseapp.com",
    projectId: "react-app-cursos-efddf",
    storageBucket: "react-app-cursos-efddf.appspot.com",
    messagingSenderId: "340129558006",
    appId: "1:340129558006:web:a56840caff848d9b2aabd7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//Referencia a mi base de datos
const db = firebase.firestore();

//Autenticarse con google, igual funciona con otros
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export{
    db,
    googleAuthProvider,
    firebase
}
