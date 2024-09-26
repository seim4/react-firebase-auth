import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCiGN3X-3DqxQBNTU-NkKwVR864UTccqCM",
    authDomain: "react-firebase-auth-58f4c.firebaseapp.com",
    projectId: "react-firebase-auth-58f4c",
    storageBucket: "react-firebase-auth-58f4c.appspot.com",
    messagingSenderId: "900411035870",
    appId: "1:900411035870:web:0803c23c67cd86fc47f24f",
    measurementId: "G-327S75YQT6"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };