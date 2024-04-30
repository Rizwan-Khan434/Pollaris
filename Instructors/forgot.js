       // Import Firebase modules directly from URLs
        import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
        import { getAuth, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

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

        // Reference to the forgot password form
        const forgotForm = document.getElementById('forgot-form');

        // Add event listener for form submission
        forgotForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent form submission

            // Get user input value
            const email = document.getElementById('email').value;

            // Send password reset email
            sendPasswordResetEmail(auth, email)
                .then(() => {
                    // Password reset email sent successfully
                    alert('Password reset email sent if you have an account. Please check your email inbox.');
                })
                .catch((error) => {
                    // Handle errors
                    const errorMessage = error.message;
                    alert(errorMessage);
                });
        });