// Import the necessary functions from Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithPhoneNumber, RecaptchaVerifier } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

// Firebase configuration
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
const analytics = getAnalytics(app);
const auth = getAuth();

// Handle form submission
document.getElementById('registerForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const emailPhone = document.getElementById('emailPhone').value;
  const password = document.getElementById('password').value;

  // Check if the input is a valid email or phone number
  if (emailPhone.includes('@')) {
    // Email registration
    createUserWithEmailAndPassword(auth, emailPhone, password)
      .then((userCredential) => {
        const user = userCredential.user;
        alert('Registration successful! Welcome!');
        window.location.href = 'login.html'; // Redirect to login page
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert('Error: ' + errorMessage);
      });
  } else {
    // Phone registration (using Firebase phone number authentication)
    const appVerifier = new RecaptchaVerifier('recaptcha-container', {
      'size': 'invisible',
      'callback': (response) => {
        // Do something when captcha is solved
      }
    }, auth);

    signInWithPhoneNumber(auth, emailPhone, appVerifier)
      .then((confirmationResult) => {
        const verificationCode = prompt("Enter the verification code sent to your phone:");
        return confirmationResult.confirm(verificationCode);
      })
      .then((result) => {
        alert('Registration successful!');
        window.location.href = 'login.html'; // Redirect to login page
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert('Error: ' + errorMessage);
      });
  }
});