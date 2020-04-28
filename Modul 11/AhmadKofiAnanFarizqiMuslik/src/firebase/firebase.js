import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB1g870NDFO5J341tFIh2KLoX3Rq7B5I-8",
  authDomain: "modul11-673c9.firebaseapp.com",
  databaseURL: "https://modul11-673c9.firebaseio.com",
  projectId: "modul11-673c9",
  storageBucket: "modul11-673c9.appspot.com",
  messagingSenderId: "336279895943",
  appId: "1:336279895943:web:c2a7e8f3ae6f576d205d22",
  measurementId: "G-B4Y6M9MEEZ"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;
