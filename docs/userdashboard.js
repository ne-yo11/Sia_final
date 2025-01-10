// Import Firebase Authentication SDK
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
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

// Function to load user email into the dashboard
function loadUserEmail(user) {
  const emailElement = document.getElementById('email');
  emailElement.textContent = user.email || "Email not available"; // Display user email or a fallback message
}

// Check if the user is logged in
onAuthStateChanged(auth, (user) => {
  if (!user) {
    // Redirect to login page if not logged in
    window.location.href = 'login.html';
  } else {
    // Load user email if logged in
    loadUserEmail(user);
  }
});