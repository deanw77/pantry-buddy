import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import "firebase/firestore"

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
export const firestore = app.firestore;

export const createUserDocument = async (user) => {
  if (!user) {
    return;
  }

  const userRef = firestore.doc(`users/${user.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const {email} = user;

    try {
      userRef.set({
        email,
        createdAt: new Date()
      })
    } catch(error) {
      console.log(error);
    }
  }
}