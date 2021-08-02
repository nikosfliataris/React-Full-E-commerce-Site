import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBKOH3_ytpmXcvOigJvRFELOZ_o-d37MUE",
  authDomain: "fliataris-e-shop.firebaseapp.com",
  projectId: "fliataris-e-shop",
  storageBucket: "fliataris-e-shop.appspot.com",
  messagingSenderId: "842299059679",
  appId: "1:842299059679:web:bfa9467c38b15fa1fb286a",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();
export { provider, auth, db };
