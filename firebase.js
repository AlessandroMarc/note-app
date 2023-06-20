// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFireStore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDA7idJG_jXVsrOB4ojbYn0Y6H5DTtlt8U",
    authDomain: "note-app-65a2f.firebaseapp.com",
    projectId: "note-app-65a2f",
    storageBucket: "note-app-65a2f.appspot.com",
    messagingSenderId: "402937944402",
    appId: "1:402937944402:web:1a42a40bcaa78f8665828b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFireStore(app)
const notesCollection = collection(db, "notes")