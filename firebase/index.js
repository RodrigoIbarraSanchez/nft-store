import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC3cLAXcAOmS6YXK90V-n-lHllRiyzxnMM",
  authDomain: "nft-store-fa296.firebaseapp.com",
  projectId: "nft-store-fa296",
  storageBucket: "nft-store-fa296.appspot.com",
  messagingSenderId: "698956517686",
  appId: "1:698956517686:web:07b27b3f9e76d665c16397",
};

const app = initializeApp(firebaseConfig);

export const getFirebase = () => app;

export { getFirestore };
