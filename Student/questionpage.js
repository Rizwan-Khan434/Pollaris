function click1()
{
    var checkbox = document.getElementById('check1');
    if (checkbox.checked) {
        document.getElementById("check1").checked = false;
    }
    else {
        document.getElementById("check1").checked = true;
    }
}
function click2() {
    var checkbox = document.getElementById('check2');
    if (checkbox.checked) {
        document.getElementById("check2").checked = false;
    }
    else {
        document.getElementById("check2").checked = true;
    }
}
function click3() {
    var checkbox = document.getElementById('check3');
    if (checkbox.checked) {
        document.getElementById("check3").checked = false;
    }
    else {
        document.getElementById("check3").checked = true;
    }
}
function click4() {
    var checkbox = document.getElementById('check4');
    if (checkbox.checked) {
        document.getElementById("check4").checked = false;
    }
    else {
        document.getElementById("check4").checked = true;
    }
}
function click5() {
    var checkbox = document.getElementById('check5');
    if (checkbox.checked) {
        document.getElementById("check5").checked = false;
    }
    else {
        document.getElementById("check5").checked = true;
    }
}

const quizName = document.getElementById("qname").value.trim();
const firstName = document.getElementById("fname").value.trim();
const lastName = document.getElementById("lname").value.trim();
window.onload = function() {
    document.getElementById("name").innerHTML = firstName + " " + lastName;
}
