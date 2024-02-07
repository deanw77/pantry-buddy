import firebase from "firebase/compat/app";
// Required for side-effects
import "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDY0cMeoOdOS7w3bFV7fdiR3bglHZjYUE4",
  authDomain: "react-login-development-6450e.firebaseapp.com",
  projectId: "react-login-development-6450e",
  storageBucket: "react-login-development-6450e.appspot.com",
  messagingSenderId: "42548849303",
  appId: "1:42548849303:web:8153325b2ce01d2de197d2"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;

const imgDB = getStorage(app)
const txtDB = getFirestore(app)

export { imgDB, txtDB};