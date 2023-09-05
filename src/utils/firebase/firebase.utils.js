import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDQwxkpFU3wY1a_rdniFF6_2DKb7zmcnyc",
  authDomain: "clothing-store-ks.firebaseapp.com",
  projectId: "clothing-store-ks",
  storageBucket: "clothing-store-ks.appspot.com",
  messagingSenderId: "65749187367",
  appId: "1:65749187367:web:04a0f7b4203ffca6d44702",
  measurementId: "G-W2Q23FMV2T",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
