// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsrAxSXzfUv_TJjnt35qAKegrxQkEIkIc",
  authDomain: "realtor-clone-ab6b5.firebaseapp.com",
  projectId: "realtor-clone-ab6b5",
  storageBucket: "realtor-clone-ab6b5.appspot.com",
  messagingSenderId: "364239164377",
  appId: "1:364239164377:web:5baf85c893fca5d7697fc8",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
