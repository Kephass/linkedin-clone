import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCEn5I7vxvTW6tXGC8QN89Ih040rDoCU1c",
  authDomain: "linkedin-clone-fof.firebaseapp.com",
  projectId: "linkedin-clone-fof",
  storageBucket: "linkedin-clone-fof.appspot.com",
  messagingSenderId: "1051396095238",
  appId: "1:1051396095238:web:8f4391a760936eac0db287",
  measurementId: "G-FKL0882WNJ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
