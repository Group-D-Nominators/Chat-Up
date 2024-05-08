import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBeI2vZJf609JP_-0Hbmm9VMiv_nJb0IAQ",
  authDomain: "chat-up-372ce.firebaseapp.com",
  projectId: "chat-up-372ce",
  storageBucket: "chat-up-372ce.appspot.com",
  messagingSenderId: "125554926130",
  appId: "1:125554926130:web:273a598d6f194bb825922b"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()

export const db = getFirestore()

export const storage = getStorage()