// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getReactNativePersistence, initializeAuth} from 'firebase/auth'
import AsyncStorage from "@react-native-async-storage/async-storage";
import {getFirestore, collection} from 'firebase/firestore'
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfRG3D-mQG61q_yS1slm5CZ_l3itCR3-s",
  authDomain: "ridem8app.firebaseapp.com",
  projectId: "ridem8app",
  storageBucket: "ridem8app.appspot.com",
  messagingSenderId: "433877216520",
  appId: "1:433877216520:web:33177159e0b6fb4bc490bd",
  measurementId: "G-FVNCEDKGV3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
});

export const db= getFirestore(app);

export const usersRef= collection(db, 'users');
export const roomRef= collection(db, 'room');