
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCKzTiFuJtaLbMdAfHKq_Y28PfrgjoHidA",
  authDomain: "house-marketplace-app-d463d.firebaseapp.com",
  projectId: "house-marketplace-app-d463d",
  storageBucket: "house-marketplace-app-d463d.appspot.com",
  messagingSenderId: "731431581187",
  appId: "1:731431581187:web:1b4d4eb5eae6453ee10036"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()