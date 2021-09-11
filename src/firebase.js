import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/functions';

const config = {
  apiKey: process.env.REACT_APP_FIRE_BASE_KEY,
  authDomain: process.env.REACT_APP_FIRE_BASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIRE_BASE_DB_URL,
  projectId: process.env.REACT_APP_FIRE_BASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIRE_BASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIRE_BASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIRE_BASE_APP_ID,
  measurementId: process.env.REACT_APP_FIRE_BASE_MEASURMENT_ID,
};

// Your web app's Firebase configuration - from Firebase console
/*
const firebaseConfig = {
  apiKey: "AIzaSyAlCuwLFnOFaYYdarasZVHJnl-Ne3E2VjE",
  authDomain: "finalfoods-6d257.firebaseapp.com",
  projectId: "finalfoods-6d257",
  storageBucket: "finalfoods-6d257.appspot.com",
  messagingSenderId: "1014822662284",
  appId: "1:1014822662284:web:3bc7319230a3ca5cc40ba9"
};
*/
firebase.initializeApp(config);
firebase.firestore();
firebase.storage();

export default firebase;
