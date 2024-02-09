// Required for side-effects
import "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAQKTfIgPplNbv1bc4rVS8YDsXu3fHVeTo",
  authDomain: "pantry-buddy-f533c.firebaseapp.com",
  projectId: "pantry-buddy-f533c",
  storageBucket: "pantry-buddy-f533c.appspot.com",
  messagingSenderId: "562473844922",
  appId: "1:562473844922:web:10b3aadb531522e9a80283"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;

export const imgDB = getStorage(app)
export const db = getFirestore(app)