import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyClYywIYn5ZmxdZ40IBKQ3wZygXUFtGXVs",
    authDomain: "olxclone-9d730.firebaseapp.com",
    projectId: "olxclone-9d730",
    storageBucket: "olxclone-9d730.appspot.com",
    messagingSenderId: "1051906236909",
    appId: "1:1051906236909:web:32d7e6c97bd7b2052047e4",
    measurementId: "G-DG6JPZ6WZ8"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);