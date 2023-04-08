// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDmUha-XNNqH-pb6t_yrBpKGNzDv1jmoMs",
  authDomain: "chatty-78b47.firebaseapp.com",
  projectId: "chatty-78b47",
  storageBucket: "chatty-78b47.appspot.com",
  messagingSenderId: "50874653849",
  appId: "1:50874653849:web:4be045c6a2a0c822a6ac08",
  measurementId: "G-XJ731JHLML",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;



