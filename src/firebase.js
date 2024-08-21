
// firebase.js
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
















// // firebase.js
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyD3CQmgRlfypFiRvVL0GPiEHxtjo6FsQ7s",
//   authDomain: "countdown-board.firebaseapp.com",
//   projectId: "countdown-board",
//   storageBucket: "countdown-board.appspot.com",
//   messagingSenderId: "671636350936",
//   appId: "1:671636350936:web:1445dc60d6a0ff62f334ad"
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// export { auth };























// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getDatabase } from 'firebase/database';
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyD3CQmgRlfypFiRvVL0GPiEHxtjo6FsQ7s",
//   authDomain: "countdown-board.firebaseapp.com",
//   projectId: "countdown-board",
//   storageBucket: "countdown-board.appspot.com",
//   messagingSenderId: "671636350936",
//   appId: "1:671636350936:web:1445dc60d6a0ff62f334ad"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const database = getDatabase(app);

// export {auth};