
 // JavaScript calculator 
let total = 0;
let displayString = "";
let action = 0;


function numberType(passnumber) {
    displayString = displayString + passnumber.toString();
    document.getElementById("display").innerHTML = displayString;
}
 // JavaScript add
function add() {
    total = Number(displayString);
    action = 1;
    displayString = "";


    document.getElementById("display").innerHTML = displayString;
}
 // JavaScript sub
function sub() {
    total = Number(displayString);
    action = 2;
    displayString = "";

    document.getElementById("display").innerHTML = displayString;
}
 // JavaScriptmul
function multiplication() {
    total = Number(displayString);
    action = 3;
    displayString = "";

    document.getElementById("display").innerHTML = displayString;
}
 // JavaScript div
function div() {
    total = Number(displayString);
    action = 4;
    displayString = "";

    document.getElementById("display").innerHTML = displayString;
}
 // JavaScript percentage
function percentage() {
    total = Number(displayString);
    action = 5;
    displayString = "";

    document.getElementById("display").innerHTML = displayString;
}
 // JavaScript result
function showResult() {

    if (action == 1) {
        total = total + Number(displayString);
    } else if (action == 2) {
        total = total - Number(displayString);
    } else if (action == 3) {
        total = total * Number(displayString);
    } else if (action == 4) {
        total = total / Number(displayString);
    } else if (action == 5) {
        total = total % Number(displayString)
    }


 // JavaScript showing
    displayString = total;
    document.getElementById("display").innerHTML = displayString;
}
 // JavaScript clear
function clearFunction() {
    total = 0;
    displayString = "";
    document.getElementById("display").innerHTML = ""
}
 // JavaScript backspace
function Backspace() {
    displayString = displayString.substring(0, displayString.length - 1)
    document.getElementById("display").innerHTML = displayString


}
