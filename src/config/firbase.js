import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_GNpk0PaqpJfnzsT5w7MSQiCLO6155Fg",
  authDomain: "online-ecom.firebaseapp.com",
  projectId: "online-ecom",
  storageBucket: "online-ecom.appspot.com",
  messagingSenderId: "1004148070309",
  appId: "1:1004148070309:web:139fa51f5d30d6285cfa4c",
  measurementId: "G-DRQ147JNNH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const Storage = getStorage(app)

export {db,auth,analytics,Storage}