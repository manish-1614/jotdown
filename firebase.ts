// Import the functions you need from the SDKs you need
import { getApp, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACsXL6xvGcd13z7zehcI49L-Pz-m3ER64",
  authDomain: "jotdown-605ee.firebaseapp.com",
  projectId: "jotdown-605ee",
  storageBucket: "jotdown-605ee.firebasestorage.app",
  messagingSenderId: "499246265017",
  appId: "1:499246265017:web:cca37c9de2b4aab6a92168"
};

// Initialize Firebase
// const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const app = getApp() === undefined ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export {db}
