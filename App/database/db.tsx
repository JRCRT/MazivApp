import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB0PIGai2QL3qhogPk0H2lnfaLIqNjO8JQ",
  authDomain: "maziv-app.firebaseapp.com",
  projectId: "maziv-app",
  storageBucket: "maziv-app.appspot.com",
  messagingSenderId: "330686981096",
  appId: "1:330686981096:web:d64ddfbf6e742e2ea5ba5d",
  measurementId: "G-1338VNEWTT",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;
