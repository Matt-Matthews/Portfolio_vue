import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import configs from "./config.json"

const firebaseConfig = {
  ...configs[0]
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const analytics = getAnalytics(app);

export {firestore, analytics};