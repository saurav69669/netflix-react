// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrMUTOl-zh0t8MWpgmMFgIeZHLQZjwHdo",
  authDomain: "netflixreact-3d9b2.firebaseapp.com",
  projectId: "netflixreact-3d9b2",
  storageBucket: "netflixreact-3d9b2.firebasestorage.app",
  messagingSenderId: "823495307597",
  appId: "1:823495307597:web:5ab720c7495ed1d064c704",
  measurementId: "G-DE54YY76CJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();