// Required for side-effects
import "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBK38c-YRvNwp1rEQ0Vz9Ftlg2SzMiljCo",
  authDomain: "pantry-buddy-fcc2d.firebaseapp.com",
  projectId: "pantry-buddy-fcc2d",
  storageBucket: "pantry-buddy-fcc2d.appspot.com",
  messagingSenderId: "87248658599",
  appId: "1:87248658599:web:0dc1cdae25de359aaffb82"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;

export const imgDB = getStorage(app)
export const db = getFirestore(app)