function calculateBill() {
    // Retrieve units consumed
    let units = parseFloat(document.getElementById('units').value);
    let rate;
    let surcharge;

    // Determine the rate 
    if (units <= 50) {
        rate = 0.5;
    } else if (units <= 150) {
        rate = 0.75;
    } else if (units <= 250) {
        rate = 1.25;
    }  else if (units <= 251) {
        rate = 1.50; // Unclear condition
    } 

    // Calculate bill amount based on 
    let  billAmount = units * rate;

    // Apply surcharge if bill amount 
    if (billAmount > 0) {
        surcharge = billAmount * 0.2; 
        billAmount += surcharge; // Add surcharge to 
    }

    // Update the result paragraph 
    document.getElementById('result').innerText = 'Your total bill amount is: ₹' + billAmount.toFixed(2); // Display result
}