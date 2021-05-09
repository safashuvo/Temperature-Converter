const inputTemp = document.querySelector("#inputTemp");
const convert = document.querySelector("#convert");
const result = document.querySelector("#result");
const inputLabel = document.querySelector("#inputLabel");
const convertLabel = document.querySelector("#convertLabel");
const exchangeBtn = document.querySelector(".exchangeBtn");

// conversion C to F
function CtoF() {
    result.value = eval(((inputTemp.value) * 9) / 5 + 32) + " " + "F";
}
// conversion F to C 
function FtoC() {
    result.value = eval(((inputTemp.value - 32) * 5) / 9) + " " + "C";
}




// Label Exchange Function
function labelExchangeInputToOutput() {
    inputLabel.textContent = "Fahrenheit";
    convertLabel.textContent = "Celsius";
    exchangeBtn.setAttribute("onclick", "labelExchangeOutputToInput()");
    convert.setAttribute("onclick", "FtoC()");
}

function labelExchangeOutputToInput() {
    inputLabel.textContent = "Celsius";
    convertLabel.textContent = "Fahrenheit";
    exchangeBtn.setAttribute("onclick", "labelExchangeInputToOutput()");
    convert.setAttribute("onclick", "CtoF()");
}