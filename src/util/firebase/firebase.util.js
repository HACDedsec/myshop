import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider
} from "firebase/auth";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,

} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD4Dy1spmpV6PHKcMNSYrkteABkGhQM3Hc",
  authDomain: "myshop-27f7e.firebaseapp.com",
  projectId: "myshop-27f7e",
  storageBucket: "myshop-27f7e.appspot.com",
  messagingSenderId: "72017358924",
  appId: "1:72017358924:web:de1b042baf3d2e6cd284e9",
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);

  if (!userSnapshot.exists()) {
    const { displyName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displyName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error error error", error.message);
    }
  }

  return userDocRef;
};

