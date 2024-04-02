 // JavaScript even or odd
function evenOrOdd() {
    let x = document.getElementById("input-one").value;
    if (x % 2 == 0) {
        document.getElementById("display-text").innerHTML = "EVEN NUMBER";
    } else {
        document.getElementById("display-text").innerHTML = "ODD NUMBER";
    }
}
 // JavaScript elightable
function isEligable() {
    let x = document.getElementById("input-one").value;
    if (x >= 18) {
        document.getElementById("display-text").innerHTML =
            "ELIGABLE TO VOTE";
    } else {
        document.getElementById("display-text").innerHTML =
            "NOT ELIGABLE TO VOTE";
    }
}
 // JavaScript is egual to
function isEqualTo() {
    let x = document.getElementById("input-one").value;
    let y = document.getElementById("input-two").value;
    if (x == y) {
        document.getElementById("display-text").innerHTML =
            "BOTH NUMBERS ARE EQUAL";
    } else {
        document.getElementById("display-text").innerHTML =
            "BOTH NUMBERS ARE NOT EQUAL";
    }
}
 // JavaScript inter changes
function Interchange() {
    let x = document.getElementById("input-one").value;
    let y = document.getElementById("input-two").value;
    document.getElementById("input-one").value = y;
    document.getElementById("input-two").value = x;
    document.getElementById("display-text").innerHTML =
        "Values Interchanged";
}