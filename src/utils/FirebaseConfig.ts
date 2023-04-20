import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { collection, getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  piKey: process.env.FIREBASE_API_KEY,
  authDomain: 'zoom-clone-6a699.firebaseapp.com',
  projectId: 'zoom-clone-6a699',
  storageBucket: 'zoom-clone-6a699.appspot.com',
  messagingSenderId: '383178159873',
  appId: process.env.FIREBASE_APP_ID,
  measurementId: 'G-BYGRZGHRS1',
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, 'users');
export const meetingsRef = collection(firebaseDB, 'meetings');
