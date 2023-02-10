import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore';
import {getStorage} from '@firebase/storage';
import {getAuth} from '@firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCh2X2opN14ARAoka-hMeVvPzrYoQ_UCwk",
  authDomain: "capstone-proj-da7cf.firebaseapp.com",
  projectId: "capstone-proj-da7cf",
  storageBucket: "capstone-proj-da7cf.appspot.com",
  messagingSenderId: "914250843410",
  appId: "1:914250843410:web:4dbcbc435244006646dfcb",
  measurementId: "G-645V4K0WCS"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);