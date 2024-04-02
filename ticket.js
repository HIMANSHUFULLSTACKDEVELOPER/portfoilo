function calculateTicketPrice() {
    // Getting the entered age
    var age = parseInt(document.getElementById('age').value);
    var ticketPrice = 1000; // Initial ticket price in INR

    // Checking if age is below 17 or above 70
    if (age < 17 || age > 70) {
      ticketPrice /= 2; // Halving ticket price for age below 17 or above 70
    }

    // Displaying the calculated ticket price
    document.getElementById('ticketPrice').innerText = 'Ticket Price: ₹' + ticketPrice.toFixed(2);
  }