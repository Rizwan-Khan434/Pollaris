// Generates a five digit random code for the instructor.
/*function generateRandomQuizCode() {
    var randomCode = "";
    randomCode = Math.random().toString(36);
    randomCode = randomCode.substring(3, randomCode.length-5);
    // the lines above sometimes returns a 4-digit code
    if (randomCode.length == 4 ) {
        randomCode += Math.random().toString(36).at(0);
    }
    // console.log(randomCode);
    // return 5-digit random code
    return randomCode;
}*/
/*
let quizCode = null;

function generateRandomQuizCode() {
    // Check if a code has already been generated for the quiz
    if (quizCode) {
        displayQuizCode(quizCode);
    } else {
        // Generate a random code consisting of 5 digits (0-9)
        quizCode = "";
        const codeLength = 5;

        for (let i = 0; i < codeLength; i++) {
            quizCode += Math.floor(Math.random() * 10);
        }

        // Display the code on the screen
        displayQuizCode(quizCode);
    }
}

function displayQuizCode(code) {
    // Display the code on the screen
    const codeDisplayElement = document.getElementById('randomCodeDisplay');
    codeDisplayElement.textContent = 'Quiz Code: ' + code;
}*/
let quizCode = null;

function generateRandomQuizCode() {
    // Check if a code has already been generated for the quiz
    if (quizCode) {
        displayQuizCode(quizCode);
    } else {
        // Generate a random code consisting of 5 digits (0-9)
        quizCode = "";
        const codeLength = 5;

        for (let i = 0; i < codeLength; i++) {
            quizCode += Math.floor(Math.random() * 10);
        }

        // Display the code on the screen
        displayQuizCode(quizCode);
    }
}

function displayQuizCode(code) {
    // Display the code on the screen
    const codeDisplayElement = document.getElementById('randomCodeDisplay');
    codeDisplayElement.textContent = 'Quiz Code: ' + code;
}

// Call generateRandomQuizCode() when the page loads
window.onload = generateRandomQuizCode;



