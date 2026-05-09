import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyA-244W63fdRLxwRuYxL93WQQgJ_vpFP2Mxw",
  authDomain: "lifelane-2dae0.firebaseapp.com",
  projectId: "lifelane-2dae0",
  storageBucket: "lifelane-2dae0.firebasestorage.app",
  messagingSenderId: "913044263055",
  appId: "1:913044263055:web:8115ad7ffe455a47e9a0fa",
  databaseURL: "https://lifelane-2dae0-default-rtdb.asia-southeast1.firebasedatabase.app",
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);

export default app;
