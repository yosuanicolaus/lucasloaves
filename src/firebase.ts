import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDM84wvQ6s0lQ5zoOcSF5829CbbmWJufqs",
  authDomain: "luca-s-loaves.firebaseapp.com",
  projectId: "luca-s-loaves",
  storageBucket: "luca-s-loaves.appspot.com",
  messagingSenderId: "39390782895",
  appId: "1:39390782895:web:745a5299011cd1f2b2fb5a",
  measurementId: "G-8F93BLTBKL",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const ordersQuery = collection(db, "orders");
export const jobsQuery = collection(db, "jobs");
export const productsQuery = collection(db, "products");
