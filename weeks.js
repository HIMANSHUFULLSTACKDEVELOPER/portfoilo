   // JavaScript function to show day
   function showDay() {
    // Get input value
    var inputNumber = document.getElementById("inputNumber").value;
    // Get result element
    var result = document.getElementById("result");

    // Convert input to integer
    inputNumber = parseInt(inputNumber);

    // Check if the input is valid
    if (inputNumber >= 1 && inputNumber <= 7) {
        var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',];
        // Display result
        result.textContent = " DAY IS TODAY " + days[inputNumber - 1] + ".";
    } else {
        // Display error message if input is invalid
        result.textContent = "Please enter a number between 1 and 7.";
    }
}