// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyCozcjWFTXzi0CgYtzmnjXnfK0ulmdwYR4",
  authDomain: "login-24eb3.firebaseapp.com",
  projectId: "login-24eb3",
  storageBucket: "login-24eb3.firebasestorage.app",
  messagingSenderId: "153476896906",
  appId: "1:153476896906:web:be30637700fd0060827573",
  measurementId: "G-VC8277GVYS"
};
// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup, signOut };