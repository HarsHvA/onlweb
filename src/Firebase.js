// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAL-e4aAjVvTSgLbzxAjjehWG0Zh4pMoJw",
  authDomain: "onlp-8358f.firebaseapp.com",
  projectId: "onlp-8358f",
  storageBucket: "onlp-8358f.appspot.com",
  messagingSenderId: "903630450655",
  appId: "1:903630450655:web:d774617774c7b288b39e6a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const storage = getStorage(app);
