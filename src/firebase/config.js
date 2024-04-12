import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD5X0VYP6GNGV83hPmAqIqz30zT-klJXH0",
  authDomain: "portfolio-website-t2wvi8.firebaseapp.com",
  projectId: "portfolio-website-t2wvi8",
  storageBucket: "portfolio-website-t2wvi8.appspot.com",
  messagingSenderId: "994651264745",
  appId: "1:994651264745:web:07116b5470d2e0a19f0278",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storageInstance = getStorage(app);
