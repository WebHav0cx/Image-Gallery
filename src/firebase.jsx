// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQkR3KmmK03B3E-0gKk2pfU7TGWCJ851E",
  authDomain: "image-gallery-abb55.firebaseapp.com",
  projectId: "image-gallery-abb55",
  storageBucket: "image-gallery-abb55.appspot.com",
  messagingSenderId: "699108457096",
  appId: "1:699108457096:web:b80ea8f83324dc3e72fd3d",
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
