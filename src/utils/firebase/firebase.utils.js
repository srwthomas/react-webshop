import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC-C7_N3KslSOzwyuTGGD7pr5yojfx3GlM",
  authDomain: "react-webshop-f8c64.firebaseapp.com",
  projectId: "react-webshop-f8c64",
  storageBucket: "react-webshop-f8c64.appspot.com",
  messagingSenderId: "685590917290",
  appId: "1:685590917290:web:44507264639981935c60d3",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

const db = getFirestore();
export const createUserDoc = async (userAuth) => {
  const userDocRef = await doc(db, "users", userAuth.uid);
  console.log(userDocRef);
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, { displayName, email, createdAt });
    } catch (err) {
      console.log(err);
    }
  }
  return userDocRef;
};
