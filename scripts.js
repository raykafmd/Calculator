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
    window.location.href = "https://raykafmd.github.io/Calculator/Multiply.html";
}

function GoAdd() {
    window.location.href = "https://raykafmd.github.io/Calculator/Add.html";
}

function GoSub() {
    window.location.href = "https://raykafmd.github.io/Calculator/Sub.html";
}

function GoDiv() {
    window.location.href = "https://raykafmd.github.io/Calculator/Div.html";
}

function GoMod() {
    window.location.href = "https://raykafmd.github.io/Calculator/Mod.html";
}

function GoEx() {
    window.location.href = "https://raykafmd.github.io/Calculator/Ex.html";
}

function GoSquare() {
    window.location.href = "https://raykafmd.github.io/Calculator/Square.html";
}

function GoFact() {
    window.location.href = "https://raykafmd.github.io/Calculator/Factorials.html";
}

function GoAC() {
    window.location.href = "https://raykafmd.github.io/Calculator/AC.html";
}

function GoAbout() {
    window.location.href = "https://raykafmd.github.io/Calculator/AboutCreator.html";
}

function GoHome() {
    window.location.href = "https://raykafmd.github.io/Calculator/index.html";
}

