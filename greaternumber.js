 // JavaScript compare number
function compareNumbers() {
    // Retrieving values from input fields
    var number1 = parseInt(document.getElementById('number1').value);
    var number2 = parseInt(document.getElementById('number2').value);
    var number3 = parseInt(document.getElementById('number3').value);
    // Retrieving the results container
    var resultsDiv = document.getElementById('results');
    // Clearing previous results
    resultsDiv.innerHTML = '';

    // Checking if all inputs are numbers
    if (!isNaN(number1) && !isNaN(number2) && !isNaN(number3)) {
        // Comparing the numbers and displaying the result
        if (number1 > number2 && number1 > number3) {
            resultsDiv.innerHTML += 'Number 1 is greater than Number 2 and Number 3.<br>';
        } else if (number2 > number1 && number2 > number3) {
            resultsDiv.innerHTML += 'Number 2 is greater than Number 1 and Number 3.<br>';
        } else if (number3 > number1 && number3 > number2) {
            resultsDiv.innerHTML += 'Number 3 is greater than Number 1 and Number 2.<br>';
        } else {
            resultsDiv.innerHTML += 'Two or more numbers are equal.<br>';
        }
    }
}