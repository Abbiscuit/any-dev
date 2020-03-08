import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCmBkOgy38GjjoBUBhWUh9IashmHIMSfHA",
  authDomain: "firelatte-4876e.firebaseapp.com",
  databaseURL: "https://firelatte-4876e.firebaseio.com",
  projectId: "firelatte-4876e",
  storageBucket: "firelatte-4876e.appspot.com",
  messagingSenderId: "1064469103367",
  appId: "1:1064469103367:web:dadf25b93a62a63fcdbba2",
  measurementId: "G-C1W7QSDPHX"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();

/*************
 * Google Auth
 *************/
const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};

export const signOut = () => {
  auth.signOut();
};

export const createProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = db.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email, uid } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName: displayName,
        email: email,
        createdAt: createdAt,
        uid,
        ...additionalData
      });
    } catch (err) {
      console.log(err.message);
    }
  }
  return userRef;
};

export default firebase;
