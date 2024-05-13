import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import{getStorage} from "firebase/storage";

              
const firebaseConfig = {
  apiKey: "AIzaSyAQXYSgBNXwJl0n46rKWhJgVNi71qBvTOk",
  authDomain: "myhotel-e91ea.firebaseapp.com",
  databaseURL: "https://myhotel-e91ea-default-rtdb.firebaseio.com",
  projectId: "myhotel-e91ea",
  storageBucket: "myhotel-e91ea.appspot.com",
  messagingSenderId: "276844910329",
  appId: "1:276844910329:web:1991f404771c6e71a83428",
  measurementId: "G-ENLQVDY4GB"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export const db = getDatabase();
const storage = getStorage(app);
export default app;
