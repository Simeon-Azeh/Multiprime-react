import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCTEH0V95TeM344uLwwO5KMVYETyUwcNKY",
  authDomain: "multiprime-7e0da.firebaseapp.com",
  projectId: "multiprime-7e0da",
  storageBucket: "multiprime-7e0da.firebasestorage.app",
  messagingSenderId: "790502557654",
  appId: "1:790502557654:web:c51ce59e664fb63c420677",
  measurementId: "G-X7PSDXQX3R"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, analytics, auth, db };