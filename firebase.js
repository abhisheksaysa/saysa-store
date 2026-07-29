// Firebase Configuration
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

import { getStorage } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyBLYDmdpaapDRIq9KANzrR_1vI7gQ6-ATA",
  authDomain: "saysa-store.firebaseapp.com",
  projectId: "saysa-store",
  storageBucket: "saysa-store.firebasestorage.app",
  messagingSenderId: "454544076672",
  appId: "1:454544076672:web:ea09d92ce3141d7c74db65"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
