// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD7pTt126DUSITIRyG4xNnVmDH50wWAi7w",
  authDomain: "taskbuddy-67332.firebaseapp.com",
  projectId: "taskbuddy-67332",
  storageBucket: "taskbuddy-67332.firebasestorage.app",
  messagingSenderId: "914929371404",
  appId: "1:914929371404:web:7709e606b2e8aceaafe129",
  measurementId: "G-E3N2LRTB4V",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
// taskbuddy-khaki.vercel.app