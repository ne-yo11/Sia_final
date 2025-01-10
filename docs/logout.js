// Import Firebase Auth SDK
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCPcVlte2G7R0S3w_aQ63t_X_sM_kHb0rA",
    authDomain: "sample-6ae51.firebaseapp.com",
    databaseURL: "https://sample-6ae51-default-rtdb.firebaseio.com",
    projectId: "sample-6ae51",
    storageBucket: "sample-6ae51.firebasestorage.app",
    messagingSenderId: "760175641681",
    appId: "1:760175641681:web:b3e1c7a0dc81126a49e470",
    measurementId: "G-79XZXBLMS3"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Sign out the user
signOut(auth).then(() => {
  // Redirect to login page after logging out
  window.location.href = 'login.html';
}).catch((error) => {
  console.error('Error signing out: ', error);
});