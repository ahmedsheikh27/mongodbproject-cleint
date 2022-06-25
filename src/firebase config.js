// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcIEtmgjhRV2lGlbL3RIrtsYQD1ucwiiQ",
  authDomain: "mern-and-firebase.firebaseapp.com",
  projectId: "mern-and-firebase",
  storageBucket: "mern-and-firebase.appspot.com",
  messagingSenderId: "498468176424",
  appId: "1:498468176424:web:74778f5a444752f22beb1d",
  measurementId: "G-THWMJ90XY7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app)
export default database ;