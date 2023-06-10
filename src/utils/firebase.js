// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQok51QbBhsDTtBSAbyvJn48HlmQiOFVg",
  authDomain: "aby-zebra.firebaseapp.com",
  projectId: "aby-zebra",
  storageBucket: "aby-zebra.appspot.com",
  messagingSenderId: "426018360983",
  appId: "1:426018360983:web:7f1196b3f0c72552d823d2",
  measurementId: "G-2JNHZRCX7Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
const analytics = getAnalytics(app);
