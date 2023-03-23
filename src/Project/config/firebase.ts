// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtyy8OM_dXqiiIjWLFJYD17ml9DN8Sl0o",
  authDomain: "react-project-cdeca.firebaseapp.com",
  projectId: "react-project-cdeca",
  storageBucket: "react-project-cdeca.appspot.com",
  messagingSenderId: "529728407719",
  appId: "1:529728407719:web:cbf9aaf523f20cc9af3382"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app)