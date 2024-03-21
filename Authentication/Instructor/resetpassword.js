// Import Firebase modules directly from URLs
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAuth, verifyPasswordResetCode, confirmPasswordReset } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

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

// Get oobCode from URL
const urlParams = new URLSearchParams(window.location.search);
const oobCode = urlParams.get('oobCode');

// Reference to the reset password form
const resetPasswordForm = document.getElementById('reset-password-form');

// Add event listener for form submission
resetPasswordForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get user input values
    const newPassword = document.getElementById('new-password').value;
    const confirmNewPassword = document.getElementById('confirm-new-password').value;

    // Validate password match
    if (newPassword !== confirmNewPassword) {
        alert('Passwords do not match. Please try again.');
        return;
    }

    // Verify the password reset code and reset the password
    verifyPasswordResetCode(auth, oobCode)
        .then((email) => {
            // Password reset code is valid, now reset the password
            confirmPasswordReset(auth, oobCode, newPassword)
                .then(() => {
                    // Password reset successful
                    alert('Password reset successfully!');
                })
                .catch((error) => {
                    // Handle errors during password reset
                    const errorMessage = error.message;
                    alert(errorMessage);
                });
        })
        .catch((error) => {
            // Handle errors during password reset code verification
            const errorMessage = error.message;
            alert(errorMessage);
        });
});