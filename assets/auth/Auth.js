// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyDDDMmCOF83iqsR8OliCz_5zF_rcJCHKlc",
  authDomain: "fullture-images-app-39f02.firebaseapp.com",
  projectId: "fullture-images-app-39f02",
  storageBucket: "fullture-images-app-39f02.appspot.com",
  messagingSenderId: "1040666701645",
  appId: "1:1040666701645:web:b32847d179ac7173881104"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);