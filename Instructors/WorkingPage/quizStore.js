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

function publish() {
    var quizName = document.querySelector('.question').value.trim();

    if (quizName === '') {
        alert("Please enter a quiz name.");
        return; 
    }

    var questions = document.querySelectorAll('.questionTemplate');

    for (var i = 0; i < questions.length; i++) {
        var questionInput = questions[i].querySelector('.question');
        var questionText = questionInput.value.trim();

        if (questionText === '') {
            alert("Please fill out the question field in each question.");
            return;
        }

        var answerInputs = questions[i].querySelectorAll('.answer');

        if (answerInputs[0].value.trim() === '' || answerInputs[1].value.trim() === '') {
            alert("Please make sure the first two answer choices are filled out for each question.");
            return;
        }
    }
    alert("Quiz published successfully!");
}

var questionCounter = 1;

function addQuestion() {
    var questionsList = document.getElementById('questionsList');
    var questionTemplate = document.querySelector('.questionTemplate');
    var clonedQuestionTemplate = questionTemplate.cloneNode(true);

    // Clear all input fields and select elements in the cloned question template
    clonedQuestionTemplate.querySelectorAll('input').forEach(function (input) {
        input.value = '';
    });

    clonedQuestionTemplate.querySelectorAll('select').forEach(function (select) {
        select.selectedIndex = 0;
    });

    var questionItem = document.createElement('li');
    questionItem.appendChild(clonedQuestionTemplate);
    questionsList.appendChild(questionItem);
    questionCounter++;
    updateIds(clonedQuestionTemplate);
}

function removeQuestion(button) {
    if (questionCounter == 1) {
        alert("You must have at least one question!")
    }
    else {
        var questionItem = button.parentNode.parentNode; // Get the parent <li> of the button
        questionItem.remove(); // Remove the parent <li> from the questions list
        questionCounter--; // Decrement the question counter (optional, depending on your use case)
    }
    
}

function updateIds(questionTemplate) {
    var inputs = questionTemplate.querySelectorAll('input');
    inputs.forEach(function (input) {
        var oldId = input.id;
        if (oldId !== '') {
            var newId = oldId + '_' + questionCounter;
            input.id = newId;
        }
    });
}