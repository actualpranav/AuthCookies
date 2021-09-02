import firebase from "firebase";
// import { initializeApp } from "firebase/app";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcEH1XGhAjsSrkbYg6_DWW_9SZQg-_TaM",
  authDomain: "authcheck4.firebaseapp.com",
  projectId: "authcheck4",
  storageBucket: "authcheck4.appspot.com",
  messagingSenderId: "853853746092",
  appId: "1:853853746092:web:c18baba9f8fc71f6300009",
  measurementId: "G-57EDLR21TB",
};

const App = firebase.initializeApp(firebaseConfig);

// firebase.analytics();

export default firebase;
