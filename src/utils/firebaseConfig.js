import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCohT1klH5M0BrUhMhOW5EKiT7AYL3uc3s",
  authDomain: "coder-thagen.firebaseapp.com",
  projectId: "coder-thagen",
  storageBucket: "coder-thagen.appspot.com",
  messagingSenderId: "963917676230",
  appId: "1:963917676230:web:392bf22a8135a2d133e1c7"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

