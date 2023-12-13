// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth, GoogleAuthProvider} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB19VNDqDC4b4OS5jNcmPPf25_fAuP80Gc",
  authDomain: "blog-platform-d5139.firebaseapp.com",
  projectId: "blog-platform-d5139",
  storageBucket: "blog-platform-d5139.appspot.com",
  messagingSenderId: "878121292266",
  appId: "1:878121292266:web:aa415b86517ac467d36293"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();