import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "@firebase/firestore";


const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.REACT_APP_env.messagingSenderId,
    appId: process.env.REACT_APP_appId
  };

  const app = initializeApp(firebaseConfig);

  const db = getFirestore();
  export const auth = getAuth(app);