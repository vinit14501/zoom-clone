// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { collection, getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBaG4qJOsx0Tkri2q7m0yMnBBAstYuAjVY',
  authDomain: 'zoom-clone-6a699.firebaseapp.com',
  projectId: 'zoom-clone-6a699',
  storageBucket: 'zoom-clone-6a699.appspot.com',
  messagingSenderId: '383178159873',
  appId: '1:383178159873:web:cc582efcf1c46175ba4d00',
  measurementId: 'G-BYGRZGHRS1',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const userRef = collection(firebaseDB, 'users');
