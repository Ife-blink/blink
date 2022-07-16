// Import the functions you need from the SDKs you need



//import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
//import * as FirebaseCore from 'expo-firebase-core';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
//htttp

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBF5rOgLt6jZ_mYA7QegdemPiDDWW81htc",
  authDomain: "blink-733cb.firebaseapp.com",
  projectId: "blink-733cb",
  storageBucket: "blink-733cb.appspot.com",
  messagingSenderId: "1085065303623",
  appId: "1:1085065303623:web:d2094d3adeddb8f9d98362",
  measurementId: "G-BY2BQKLX65"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };