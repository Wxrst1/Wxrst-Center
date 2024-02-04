// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBh1U94OGEfWwF6Dn3z5XDmpvfe-1NVBB0",
  authDomain: "wxrst-center.firebaseapp.com",
  projectId: "wxrst-center",
  storageBucket: "wxrst-center.appspot.com",
  messagingSenderId: "408430084604",
  appId: "1:408430084604:web:ff48d13f996462f6e87279",
  measurementId: "G-XZJ6WL8T84"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);