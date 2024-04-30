// Import Firebase modules directly from URLs
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
import { getDatabase, ref, child, get } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDGUnRul8V9HQjbjHqeve6To2np6puXtWE",
    authDomain: "pollaris-fa5dc.firebaseapp.com",
    databaseURL: "https://pollaris-fa5dc-default-rtdb.firebaseio.com",
    projectId: "pollaris-fa5dc",
    storageBucket: "pollaris-fa5dc.appspot.com",
    messagingSenderId: "826719629611",
    appId: "1:826719629611:web:369cf60056d2e4ffd2556e",
    measurementId: "G-91R1GDZF6L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

// Reference to the login form
const loginForm = document.getElementById('login-form');

// Add event listener for form submission
loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get user input values
    const email = document.getElementById('uname').value;
    const password = document.getElementById('pword').value;

    // Sign in user with email and password
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Log in successfully
            const user = userCredential.user;
            // Redirect to a unique URL based on user's UID
            window.location.href = `https://pollaris.me/Instructor/WorkingPage/working.html?uid=${user.uid}`;
        })
        .catch((error) => {
            // Handle errors
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
        });
});
