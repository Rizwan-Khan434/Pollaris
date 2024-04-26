// Generates a five digit random code for the instructor.
function generateRandomQuizCode() {
    var randomCode = "";
    randomCode = Math.random().toString(36);
    randomCode = randomCode.substring(3, randomCode.length-5);
    // the lines above sometimes returns a 4-digit code
    if (randomCode.length == 4 ) {
        randomCode += Math.random().toString(36).at(0);
    }
    // return 5-digit random code
    return randomCode;
}
var random = generateRandomQuizCode();
// Call generateRandomQuizCode() when the page loads
window.onload = generateRandomQuizCode();

function blurPage() {
    var makeBlurry = document.getElementById("make-blur");
    makeBlurry.classList.toggle("active");
    var popup = document.getElementById("pop-up");
    document.getElementById("code").innerHTML = random;
    popup.classList.toggle("active");
}