function Multiply() {
    var Num1 = document.getElementById('number1').value;
    var Num2 = document.getElementById('number2').value;
    console.log(Num1)
    console.log(Num2)
    var answer = parseFloat(Num1) * parseFloat(Num2)
    document.getElementById('answertext').innerHTML = answer
}

function Add() {
    var Num1 = document.getElementById('number1').value;
    var Num2 = document.getElementById('number2').value;
    console.log(Num1)
    console.log(Num2)
    var answer = parseFloat(Num1) + parseFloat(Num2)
    document.getElementById('answer').innerHTML = answer
}

function Sub() {
    var Num1 = document.getElementById('number1').value;
    var Num2 = document.getElementById('number2').value;
    console.log(Num1)
    console.log(Num2)
    var answer = parseFloat(Num1) - parseFloat(Num2)
    document.getElementById('answer').innerHTML = answer
}

function Div() {
    var Num1 = document.getElementById('number1').value;
    var Num2 = document.getElementById('number2').value;
    console.log(Num1)
    console.log(Num2)
    var answer = parseFloat(Num1) / parseFloat(Num2)
    document.getElementById('answer').innerHTML = answer
}

function Mod() {
    var Num1 = document.getElementById('number1').value;
    var Num2 = document.getElementById('number2').value;
    console.log(Num1)
    console.log(Num2)
    var answer = parseFloat(Num1) % parseFloat(Num2)
    document.getElementById('answer').innerHTML = answer
}

function Ex() {
    var Num1 = document.getElementById('number1').value;
    var Num2 = document.getElementById('number2').value;
    console.log(Num1)
    console.log(Num2)
    var answer = parseFloat(Num1) ** parseFloat(Num2)
    document.getElementById('answer').innerHTML = answer
}

function Sqrt() {
    var Num1 = document.getElementById('number1').value;
    console.log(Num1)
    document.getElementById('answer').innerHTML = Math.sqrt(Num1)
}

function Fact() {
    var Num1 = document.getElementById('number1').value;
    console.log(Num1)
    var answer = 1;
    for (let i = Num1; i >0; i--) {
        answer = answer * i
    }
    document.getElementById('answer').innerHTML = answer
}

function AC() {
    var Num1 = document.getElementById('number1').value;
    console.log(Num1)
    var answer = (parseFloat(Num1) ** 2) * 3.14
    document.getElementById('answer').innerHTML = answer
}

function GoMultiply() {
    window.location.href = "file:///Users/raykaf/Desktop/Project%20Website/Multiply.html";
}

function GoAdd() {
    window.location.href = "file:///Users/raykaf/Desktop/Project%20Website/Add.html";
}

function GoSub() {
    window.location.href = "file:///Users/raykaf/Desktop/Project%20Website/Sub.html";
}

function GoDiv() {
    window.location.href = "file:///Users/raykaf/Desktop/Project%20Website/Div.html";
}

function GoMod() {
    window.location.href = "file:///Users/raykaf/Desktop/Project%20Website/Mod.html";
}

function GoEx() {
    window.location.href = "file:///Users/raykaf/Desktop/Project%20Website/Ex.html";
}

function GoSquare() {
    window.location.href = "file:///Users/raykaf/Desktop/Project%20Website/Square.html";
}

function GoFact() {
    window.location.href = "file:///Users/raykaf/Desktop/Project%20Website/Factorials.html";
}

function GoAC() {
    window.location.href = "file:///Users/raykaf/Desktop/Project%20Website/AC.html";
}

function GoAbout() {
    window.location.href = "file:///Users/raykaf/Desktop/Project%20Website/AboutCreator.html";
}

function GoHome() {
    window.location.href = "file:///Users/raykaf/Desktop/Project%20Website/index.html";
}

