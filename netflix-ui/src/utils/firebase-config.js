import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBrPSKDgOcryKrquDFn_m-IfcH6UcYHvO0",
  authDomain: "react-netflix-clone-a7488.firebaseapp.com",
  projectId: "react-netflix-clone-a7488",
  storageBucket: "react-netflix-clone-a7488.appspot.com",
  messagingSenderId: "456463049042",
  appId: "1:456463049042:web:0f7f1f316476780b2d1a8b",
  measurementId: "G-9TVBQBF48F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
