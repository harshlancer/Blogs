// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// : Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2icu0ptQWftBn01WlDhJ4Zs_z_7dl_pI",
  authDomain: "blogs-ed608.firebaseapp.com",
  projectId: "blogs-ed608",
  storageBucket: "blogs-ed608.appspot.com",
  messagingSenderId: "287240052859",
  appId: "1:287240052859:web:95d455251e1bf4b8fec2de",
  measurementId: "G-4ZL3275JS3",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);    

