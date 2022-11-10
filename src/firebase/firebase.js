// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from '@firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRvBdthJl0KBT4AvFEFfne4V_MW4-mT40",
  authDomain: "match-maker-sf.firebaseapp.com",
  projectId: "match-maker-sf",
  storageBucket: "match-maker-sf.appspot.com",
  messagingSenderId: "406610535057",
  appId: "1:406610535057:web:9620662dd3cbc9ad365530"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;
export const db = getFirestore(firebaseApp); //app inicializa la aplicacion con las especificaciones