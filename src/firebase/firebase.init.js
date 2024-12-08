// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHFEI9WVevD6IYAJTZxfh6w_h5xEKEcl8",
  authDomain: "book-shop-505ac.firebaseapp.com",
  projectId: "book-shop-505ac",
  storageBucket: "book-shop-505ac.firebasestorage.app",
  messagingSenderId: "961572544140",
  appId: "1:961572544140:web:6818820c18183cee8165a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);