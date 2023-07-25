// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbWc8_nMwFQcv161Og9_YnOEnHK01QXEA",
  authDomain: "react-course-83cf7.firebaseapp.com",
  projectId: "react-course-83cf7",
  storageBucket: "react-course-83cf7.appspot.com",
  messagingSenderId: "634856998001",
  appId: "1:634856998001:web:41f04ac136b844a0a487d0"
};

// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB   = getFirestore( FirebaseApp );