import firebase from "firebase/app";
import "firebase/database";

var firebaseConfig = {
  apiKey: "AIzaSyDAfHedRtjbik4bi7eFFSPV9KROBUskO9M",
  authDomain: "crud-reactjs-69323.firebaseapp.com",
  databaseURL: "https://crud-reactjs-69323-default-rtdb.firebaseio.com",
  projectId: "crud-reactjs-69323",
  storageBucket: "crud-reactjs-69323.appspot.com",
  messagingSenderId: "452932873971",
  appId: "1:452932873971:web:a9b8ef462512ad0a79d186",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;
