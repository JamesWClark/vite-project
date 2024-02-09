
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDKUOciqOAIFaeXj8u1R1a__QHi62C7-AI",
  authDomain: "vite-project-c3ceb.firebaseapp.com",
  projectId: "vite-project-c3ceb",
  storageBucket: "vite-project-c3ceb.appspot.com",
  messagingSenderId: "121451084141",
  appId: "1:121451084141:web:f133f9b0bcca2b50564264"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
