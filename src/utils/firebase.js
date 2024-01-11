import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAfG0aacAw3Pwtqgvt-TVyjrqMP_HswB8A",
  authDomain: "portfolio-e3cc6.firebaseapp.com",
  projectId: "portfolio-e3cc6",
  storageBucket: "portfolio-e3cc6.appspot.com",
  messagingSenderId: "310683576874",
  appId: "1:310683576874:web:912a4d9eed741bf8363153"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const analytics = getAnalytics(app);

export {firestore, analytics};