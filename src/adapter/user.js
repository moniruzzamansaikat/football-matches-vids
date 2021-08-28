import { auth } from "./firebase";
import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";

export const loginWithGoogle = () => {
  return signInWithPopup(auth, new GoogleAuthProvider(auth))
    .then((result) => {})
    .catch((error) => {
      console.log(error);
    });
};

export const logoutUser = () => {
  signOut(auth)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log("Cannot signout user!!");
    });
};

export const loggedInUser = async () => {
  return onAuthStateChanged(auth, (user) => {
    return user;
  });
};
