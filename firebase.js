// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDO0zIDvaOHYa4dVa2UJSjzcxZFVjvZ7sI",
  authDomain: "flashcardsaas-d2eea.firebaseapp.com",
  projectId: "flashcardsaas-d2eea",
  storageBucket: "flashcardsaas-d2eea.appspot.com",
  messagingSenderId: "743799392451",
  appId: "1:743799392451:web:73de2d442e8d4ffd317a76",
  measurementId: "G-48PLFGGKE6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Initialize Firestore


export { db }; // Export Firestore instance

