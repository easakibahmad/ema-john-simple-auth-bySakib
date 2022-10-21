// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoTsty8DQb1As2Wx2QCRypN2w8cwt4vK4",
  authDomain: "simple-auth-with-emajohn.firebaseapp.com",
  projectId: "simple-auth-with-emajohn",
  storageBucket: "simple-auth-with-emajohn.appspot.com",
  messagingSenderId: "485745553",
  appId: "1:485745553:web:d982c7348dfd421b6bf030"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;