import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyApWs-I21PcIfbqQgxGj5yoUswonoPISDk",
  authDomain: "countdown-project-app.firebaseapp.com",
  projectId: "countdown-project-app",
  storageBucket: "countdown-project-app.appspot.com",
  messagingSenderId: "725395364129",
  appId: "1:725395364129:web:f5ada2b4c96af630d4c660"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { auth };
export { db, collection, addDoc, getDocs };























