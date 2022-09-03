import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBg3xJbtg8uAfjP7dc40kIIP0qjtJZEO30",
  authDomain: "geekchatproto.firebaseapp.com",
  projectId: "geekchatproto",
  storageBucket: "geekchatproto.appspot.com",
  messagingSenderId: "397140855809",
  appId: "1:397140855809:web:a0953105b638ca7932c400",
};

const firebaseDB = firebase.initializeApp(firebaseConfig);
export const db = firebaseDB.database().ref();
export const auth = firebase.auth();
