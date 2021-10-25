// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCz0f4oXXxLKfObTug8JtyqH5tTc9g0WGs",
  authDomain: "instagram-8530e.firebaseapp.com",
  projectId: "instagram-8530e",
  storageBucket: "instagram-8530e.appspot.com",
  messagingSenderId: "1093236092817",
  appId: "1:1093236092817:web:db6808ed26bbf9cc263430",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();


export { app, db, storage};