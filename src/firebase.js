// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyBN_6ZwEXJIhPWcZbBpVpfGJkcKY9lnFPE",
  authDomain: "clone-5da58.firebaseapp.com",
  projectId: "clone-5da58",
  storageBucket: "clone-5da58.appspot.com",
  messagingSenderId: "900420221685",
  appId: "1:900420221685:web:50e730faf7de61b14963bc",
  measurementId: "G-J1FVHP5KNX"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth,db };