import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDNJb_a09Q45NMg3elViLxblE--ypGPa2M",
    authDomain: "personal-blog-b6e58.firebaseapp.com",
    projectId: "personal-blog-b6e58",
    storageBucket: "personal-blog-b6e58.appspot.com",
    messagingSenderId: "674512341619",
    appId: "1:674512341619:web:b55510b79878da4021f806"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app)

  export default db;