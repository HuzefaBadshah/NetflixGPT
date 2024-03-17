// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_SECRET,
    authDomain: "netflixgpt-7bf8e.firebaseapp.com",
    projectId: "netflixgpt-7bf8e",
    storageBucket: "netflixgpt-7bf8e.appspot.com",
    messagingSenderId: "511088212972",
    appId: "1:511088212972:web:96e73a2a00e33204c99ec9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth();