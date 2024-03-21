 // Import Firebase modules directly from URLs
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
 import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
 
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

 // Reference to the signup form
 const signupForm = document.getElementById('signup-form');

 // Add event listener for form submission
 signupForm.addEventListener('submit', function(event) {
     event.preventDefault(); // Prevent form submission

     // Get user input values
     const email = document.getElementById('uname').value;
     const password = document.getElementById('pword').value;

 // Validate password match
     if (password !== confirmPassword) {
         alert('Passwords do not match. Please try again.');
         return;
     }

     // Sign up user with email and password
     createUserWithEmailAndPassword(auth, email, password)
         .then((userCredential) => {
             // Signed up successfully
             const user = userCredential.user;
             alert('User created successfully!');
         })
         .catch((error) => {
             // Handle errors
             const errorCode = error.code;
             const errorMessage = error.message;
             alert(errorMessage);
         });
 });
