// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpmj_lTHhgSnhoxJfNYv3wJE60t-vMWe4",
  authDomain: "todopadel-d0f71.firebaseapp.com",
  projectId: "todopadel-d0f71",
  storageBucket: "todopadel-d0f71.appspot.com",
  messagingSenderId: "904065316835",
  appId: "1:904065316835:web:c303b279a33e91273592d6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
