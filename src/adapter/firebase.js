import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAT-_aXwxlfKPZkbFAnWhEW4lnflwmLRMs",
  authDomain: "football-matches-vids.firebaseapp.com",
  projectId: "football-matches-vids",
  storageBucket: "football-matches-vids.appspot.com",
  messagingSenderId: "443179256961",
  appId: "1:443179256961:web:1337bcf343b83c828b1180",
};

const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);
