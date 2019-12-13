import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB_27jEhijyWHVI2w-HyzZyQMGpovojgJo",
  authDomain: "crwn-db-262b4.firebaseapp.com",
  databaseURL: "https://crwn-db-262b4.firebaseio.com",
  projectId: "crwn-db-262b4",
  storageBucket: "crwn-db-262b4.appspot.com",
  messagingSenderId: "43989183475",
  appId: "1:43989183475:web:34f0e2a2b7885ef68c0086",
  measurementId: "G-8QG8VGFEHP"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
